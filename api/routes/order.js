const Order = require("../models/Order");
const Cart = require("../models/Cart");
const User = require("../models/User");
const Product = require("../models/Product");
const jwt = require("jsonwebtoken");
const logger = require("../logger");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const token = req.headers.token.split(" ")[1];
  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    return user.id;
  });

  try {
    // const products = await Product.find()
    const user = await User.findOne({ userId });
    const userAddress = user.address;
    const cart = await Cart.findOne({ userId });
    const cartProducts = cart.products;

    const productId = cartProducts.map((product) =>
      product.productId.toString()
    );
    const productQuantity = cartProducts.map((product) => product.quantity);

    for (i = 0; i < productId.length; i++) {
      const product = await Product.findById(productId[i]);
      product.quantity -= productQuantity[i];
      product.save();
    }

    const newOrder = new Order({
      userId: userId,
      products: cartProducts,
      address: userAddress,
      amount: cart.cartTotal,
    });

    const savedOrder = await newOrder.save();
    logger
      .child({ userId: userId })
      .info('Order "1234" was processed succesffully');
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/income", async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 6));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
