const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    companyid: Number,
    Headline: String,
    imageurl: String,
})
module.exports=mongoose.model("ads",userschema)