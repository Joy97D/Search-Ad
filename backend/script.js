const express=require("express")
const app = express();
const router=require("./index.js")
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use('/',router)
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
