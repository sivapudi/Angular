ex=require("express")
bp=require("body-parser")
session=require("express-session")
app=ex()
app.listen(1000)
app.use(bp.json())
app.use(session({secret:"$%^S",saveUninitialized:true}))
console.log("Server started..")
app.use(ex.static(__dirname))
///Ser met1
app.get("/sm1",function(req,res){
	sess=req.session
		sess.x=100
		sess.y="scott"
	console.log(sess.y)
res.send(sess)
})
	