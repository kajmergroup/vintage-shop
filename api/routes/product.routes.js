const router = require("express").Router();
const product = require("../controllers/product.controller");


router.post('/',product.create)


module.exports = router