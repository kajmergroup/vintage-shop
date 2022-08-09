const LastView = require("../models/LastView");
const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const jwt = require("jsonwebtoken");




//CREATE LASTVIEW

router.post("/", verifyToken, async (req, res) => {
  const token = req.headers.token.split(" ")[1];
  const products = req.body.products;
  const productId = products[0].productId;
  const name = products[0].name;
  const price = products[0].price;
  const img = products[0].img;
  
  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) return res.status(401).json("token is not valid!");
    return user.id;
  });
  let lastview = await LastView.findOne({ userId });

  try {
    if (lastview) {
      let itemIndex = lastview.products.findIndex(
        (p) => p.productId == productId
      );
      
      if (itemIndex == -1) {
        lastview.products.push({
          productId,
          name,
          price,
          img,
        });
      }
      lastview = await lastview.save();
      return res.status(201).json("lastviews basarili")
    } else {
      const newLastView = await LastView.create({
        userId: userId,
        products: products,
      });
      res.status(200).json(newLastView);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET LASTVIEW
router.get("/", async (req,res) => {
  const token = req.headers.token.split(" ")[1];
  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) return res.status(401).json("token is not valid!");
    return user.id;
  });
  
  try{
    const lastview = await LastView.findOne({userId})
    res.status(200).json(lastview.products)

  }catch(err) {
    res.status(500).json(err)
  }
})


//DELETE LASTVIEW

router.delete("/", async (req,res)=> {
  const token = req.headers.token.split(" ")[1];
  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) return res.status(401).json("token is not valid!");
    return user.id;
  });
  try{

    await  LastView.deleteOne({userId})
    res.status(200).json("temizlendi")

  }catch(err){
    res.status(500).json(err)
  }
})

module.exports = router;
