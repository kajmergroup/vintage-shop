const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

//CREATE CART
router.post("/cart", verifyToken, async (req, res) => {
  const { productId, quantity, name, price, color, size, img } = req.body;
  const token = req.headers.token.split(" ")[1];

  try {
    const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) return res.status(401).json("token is not valid!");
      return user.id;
    });

    let cart = await Cart.findOne({ userId });

    if (cart) {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        productItem.size = size;
        productItem.color = color;
        productItem.productTotal = quantity * price;
        cart.cartTotal = productItem.productTotal;
      } else {
        cart.products.push({
          productId,
          quantity,
          name,
          price,
          color,
          size,
          img,
          productTotal: quantity * price,
        });
        cart.cartTotal += quantity * price;
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      const newCart = await Cart.create({
        userId,
        products: [
          {
            productId,
            quantity,
            name,
            price,
            color,
            size,
            img,
            productTotal: quantity * price,
          },
        ],
        cartTotal: quantity * price,
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

//GET CART
router.get("/find/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const cart = await Cart.findOne({ userId });
    res.status(200).json(cart.products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE PRODUCT IN CART
router.delete(
  "/delete/:productId",

  async (req, res) => {
    const prodId = req.params.productId;
    const token = req.headers.token.split(" ")[1];
    const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      return user.id;
    });
    const filter = { userId: userId };

    const cart = await Cart.findOne({ userId });
    const itemIndex = cart.products.findIndex((p) => p.productId == prodId);
    const product = cart.products[itemIndex];
    const dpnd = cart.cartTotal - product.productTotal;

    try {
      cart.cartTotal -= product.productTotal;
      const updatedCart = await Cart.findOneAndUpdate(filter, {
        $pull: { products: { productId: prodId } },
        $set: { cartTotal: dpnd },
        new: true,
      });

      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//QUANTITY
router.put("/:productId", async (req, res) => {
  const prodId = req.params.productId;
  const vrb = req.body.x;
  const token = req.headers.token.split(" ")[1];
  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) return res.status(401).json("token is not valid!");
    return user.id;
  });
  const cart = await Cart.findOne({ userId });
  const itemIndex = cart.products.findIndex((p) => p.productId == prodId);
  productItem = cart.products[itemIndex];

  try {
    if (vrb === "+") {
      productItem.quantity += 1;
      productItem.productTotal += productItem.price;
      cart.cartTotal += productItem.price;
    } else {
      productItem.quantity -= 1;
      productItem.productTotal -= productItem.price;
      cart.cartTotal -= productItem.price;
    }
    try {
      if (productItem.quantity === 0) {
        cart.products.splice(itemIndex, 1);
      }
    } catch (err) {
      err;
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json("olmadi");
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

router.get("/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
