const Product = require("../models/Product");
const Order = require("../models/Order");
const { verifyTokenAndAdmin } = require("./verifyToken");
var _ = require("lodash");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

//CREATE 

router.post("/", async (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const categories = req.body.categories;
  const price = parseInt(req.body.price);
  const inStock = req.body.inStock;
  const size = req.body.size;
  const color = req.body.color;
  const img = req.body.img;
  const quantity = parseInt(req.body.quantity);

  const newProduct = new Product({
    title: title,
    desc: desc,
    categories: categories,
    price: price,
    inStock: inStock,
    size: size,
    color: color,
    quantity: quantity,
    img: img,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET RECOMMENDED PRODUCTS

router.get("/recommended/:id", async (req, res) => {
  const productId = req.params.id;
  const token = req.headers.token.split(" ")[1];
  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    return user.id;
  });
  
  try {
    // get ref product categories
    const refProd = await Product.findById(productId);
    const refcat = refProd.categories;
    // filtered products with categories
    const products = await Product.find({
      categories: {
        $in: [refcat],
      },
    });
    // get all orders with userId
    const orders = await Order.find({ userId: userId });
    // take productIds
    const productIds = orders.map((order) =>
      order.products.map((product) => product.productId)
    );
    const ids = [];
    for (let i = 0; i < productIds.length; i++) {
      for (let j = 0; j < productIds[i].length; j++) {
        ids.push(productIds[i][j]);
      }
    }
    const newids = ids.map((id) => id.toString());
    const uniqueIds = [...new Set(newids)];

    const result = products.filter(item =>  !uniqueIds.includes(item._id) )

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET LESS LEFTOVER PRODUCTS

router.get("/stats", async (req, res) => {
  const products = await Product.find();

  try {
    const newArry = products.filter((product) => product.quantity < 50);
    res.status(200).json(newArry);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET SINGLE PRODUCT STATS

router.get("/stats/:productId", async (req, res) => {
  const query = req.query.query.split(" ")[1];
  const productId = req.params.productId;

  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth()));
  const previousMonth = new Date(
    new Date().setMonth(lastMonth.getMonth() - query)
  );
  
  try {
    // get last 6 months orders
    const orders = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
        },
      },
    ]).sort({ createdAt: 1 });
    // filtered by productId
    const filteredProducts = orders.map((order) =>
      order.products.filter((product) => product.productId == productId)
    );
    // added filtered products in orders
    for (let i = 0; i < orders.length; i++) {
      orders[i].products = filteredProducts[i];
    }
    // deleted empty arrays
    const newARry = orders.filter((order) => order.products.length > 0);
    // match date and sales
    let result = [];
    for (let i = 0; i < newARry.length; i++) {
      const date = newARry.map((order) => order.createdAt);
      const sale = newARry.map((orders) =>
        orders.products.map((product) => product.quantity)
      );
      const quantity = sale.map((quantity) => quantity[0]);
      result.push({
        name: date[i].toLocaleString("default", { month: "long" }),
        total: quantity[i],
      });
    }
    //match same months
    const finalResult = _(result)
      .groupBy("name")
      .map((objs, key) => ({
        name: key,
        total: _.sumBy(objs, "total"),
      }))
      .value();

    res.status(200).json(finalResult);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ORDER WITH PRODUCT ID STATS

router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const orders = await Order.find({
      "products.productId": { $in: productId },
    });
    const filteredProducts = orders.map((order) =>
      order.products.filter((product) => product.productId == productId)
    );

    for (let i = 0; i < orders.length; i++) {
      orders[i].products = filteredProducts[i];
    }

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
