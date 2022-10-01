const express=require("express")
const getmatch =require("./getmatch.js");

const router = express.Router({
});

router.post('/:keyword',getmatch);

module.exports=router