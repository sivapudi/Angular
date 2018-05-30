ex=require("express")
bp=require("body-parser")
mongo=require("mongojs")
con=mongo("mongodb://scott:scott123@ds235180.mlab.com:35180/newdb")
app=ex()
app.listen(1000)
app.use(bp.json())
console.log("Server started..")
app.use(ex.static(__dirname))
///Ser met1
app.post("/sm1",function(req,res){
dt=req.body
con.tbl_user.find(dt).count(function(er,resu){
res.send(resu)
})
console.log(dt)

})
