const Product = require("../models/Product");



const decreaseQuantity = async (cartProducts, next) => {
    let bulkOps = cartProducts.map((item)=> {
        return {
            "updateOne": {
                "filter": { "_id": item.productId} ,
                "update": { "$inc": {"quantity": -item.quantity}}
            }
        }
    })
    try {
        await Product.bulkWrite(bulkOps,{})
        next()
    } catch(err){
        return res.status(400).json({error:"Could not update product"})
    }
}


module.exports =  decreaseQuantity;