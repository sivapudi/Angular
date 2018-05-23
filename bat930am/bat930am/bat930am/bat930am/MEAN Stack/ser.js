exp=require("express")
mj=require("mongojs")
bp=require("body-parser")
conn=mj("mongodb://dbuser1:dbuser123@ds139219.mlab.com:39219/testnew")
app=exp()
app.use(bp.json())
app.listen(1234)
app.use(exp.static(__dirname))
console.log("Server started")

/////Get data
app.get("/metget",function(req,res){
conn.tbl_user.find(function(er,resu){
if(er)
	res.send(er)
	else
	res.send(resu)
})
})
////Insert data
app.post("/metins",function(req,res){
reqdata=req.body
	console.log(reqdata)
	conn.tbl_user.save(reqdata)
	res.send("Inserted")
})
////Del a rec
app.post("/deldata",function(re,rs){
data=re.body
conn.tbl_user.remove(data)
	rs.send("Deleted")
})
	////Del all
app.delete("/delalldata",function(re,rs){
conn.tbl_user.remove()
	rs.send("Deleted")
})
	//////Update
app.post("/updatedata",function(req,res){
dt=req.body
	conn.tbl_user.update(dt[0],dt[1])
	res.send("Updated...")
})
////////get one rec
app.post("/newfun",function(req,res){
d=req.body
	conn.tbl_user.find(d,function(e,r){
res.send(r)
})
})