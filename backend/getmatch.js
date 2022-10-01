const run=require("./match")
async function x(req, res) {
const val=await run(req.params.keyword)
res.status(200);
return res.json(val)
}
module.exports=x