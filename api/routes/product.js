const Product = require("../models/Product");
const Order = require("../models/Order");
const { verifyTokenAndAdmin } = require("./verifyToken");

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

router.get("/stats/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const orders = await Order.find({
      "products.productId": { $in: productId },
    });
    const k = orders.map((order) =>
      order.products.filter((product) => product.productId == productId)
    );

    for (let i = 0; i < orders.length; i++) {
      orders[i].products = k[i];
    }
    

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json("olmuyor");
  }
});

module.exports = router;
