ex=require("express")
bp=require("body-parser")
app=ex()
app.listen(1000)
app.use(bp.json())
console.log("Server started..")
app.use(ex.static(__dirname))
///Ser met1
app.get("/sm1",function(req,res){
res.send("Method called")
})
	///Ser met2
app.post("/sm2",function(re,rs){
	reqdata=re.body
		console.log(reqdata)
rs.send("Met 2222 called")
})	