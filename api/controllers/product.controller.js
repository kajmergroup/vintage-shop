const { inventory } = require("../models/index.js");
const db= require("../models/index.js");
const Product = db.products;
const Inventory = db.inventory;



// CREATE NEW PRODUCT

exports.create = async (req, res) => {
  const prd = await Product.findOne({
    where: { title: req.body.title, color: req.body.color },
  });
  
  if (prd) {
    const inventory = await Inventory.findAll({
      where: { product_id: prd.id },
    });

    const sizeIndex = inventory.findIndex((e) => e.size == req.body.size);
    sizeIndex > -1
      ? res.status(403).json("This item already exist")
      : Inventory.create({
          size: req.body.size,
          quantity: req.body.quantity,
          product_id: prd.id,
        }) && res.status(200).json("New product added.");
  } else {
    try {
      const product = await Product.create({
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        price: req.body.price,
        color: req.body.color,
      });
      await Inventory.create({
        size: req.body.size,
        quantity: req.body.quantity,
        product_id: product.id,
      });

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
};
