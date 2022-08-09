const mongoose = require("mongoose");


const VerifySchema = new mongoose.Schema(
    {
        code:{type:Number},
        email:{type:String},
        createdAt: { type: Date, expires: '180s', default: Date.now }
        
    },
    { timestamps: true },
    
)



module.exports = mongoose.model("Verify", VerifySchema);