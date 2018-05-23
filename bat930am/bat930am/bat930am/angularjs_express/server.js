exp=require("express")
app=exp()
bp=require("body-parser")
app.use(bp.json())
app.listen(8090)
app.use(exp.static(__dirname))
console.log("started...")
console.log(__dirname)

app.get("/ser1",function(req,res){
console.log("Exec...")
res.send("Ser method called")
})

app.post("/ser2",function(re,rs){
var x=	re.body
rs.send("Met2 called")
	console.log(x)
})