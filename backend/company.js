const mongoose=require("mongoose")

const userschema=new mongoose.Schema(
    {
        companyid: Number,
        Name: String,
        Link: String,
    }
)
module.exports=mongoose.model("Company",userschema)