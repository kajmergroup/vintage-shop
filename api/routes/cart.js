const Cart = require("../models/Cart");
const mongoose = require("mongoose");
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

  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) return res.status(401).json("token is not valid!");
    return user.id;
  });

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      

      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        productItem.size = size;
        productItem.color = color;
      } else {
        cart.products.push({
          productId,
          quantity,
          name,
          price,
          color,
          size,
          img,
        });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      const newCart = await Cart.create({
        userId,
        products: [{ productId, quantity, name, price, color, size, img }],
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

//GET CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart.products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE PRODUCT IN CART
router.delete(
  "/delete/:productId",
  verifyTokenAndAuthorization,
  async (req, res) => {
    const prodId = req.params.productId;
    const token = req.headers.token.split(" ")[1];
    const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      return user.id;
    });

    try {
      const updatedCart = await Cart.findOneAndUpdate(userId, {
        $pull: { products: { productId: prodId } },
      });
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//QUANTITY
router.put("/:productId", verifyTokenAndAuthorization, async (req, res) => {
  const vrb = req.body.x;
<<<<<<< HEAD
=======
  console.log(vrb)d
>>>>>>> 5d791afb9cfc93005118fede8054f01c0f107de0
  const prodId = req.params.productId;
  const token = req.headers.token.split(" ")[1];
  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) return res.status(401).json("token is not valid!");
    return user.id;
  });

  try {
    const cart = await Cart.findOne({ userId });
    const itemIndex = cart.products.findIndex((p) => p.productId == prodId);
    productItem = cart.products[itemIndex];
    if (vrb === "+") {
      productItem.quantity += 1;
    }  else  {
      productItem.quantity -= 1;
    }
    try {
      if(productItem.quantity === 0){
        cart.products.splice(itemIndex,1)
      }
    }catch(err){err}
    
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

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
