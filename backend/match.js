const express=require("express")
const mongoose=require("mongoose")
const User=require("./Ads")
const company = require("./company")
mongoose.connect("mongodb://localhost/myDB")
async function run(inp){
 try{
        
        const ad=await User.find(
        {
            Headline:{"$regex":inp,"$options": "i"}
        }
        )
        const comp=await company.find({})
        let combineddata=[]
        if(ad[0]){
        comp.map(y=>{
        ad.map(x=>{
            if(x.companyid===y.companyid)
            {
               const data={
                   comapanyid:y.companyid,
                   Headline:x.Headline,
                   imageurl:x.imageurl,
                   Link:y.Link
               }
               combineddata.push(data)
            }
        })})
    }
    return combineddata
    }
    catch(e){
         console.log(e.message)
}}
module.exports=run