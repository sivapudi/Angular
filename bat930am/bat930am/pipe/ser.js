exp=require("express")
app=exp()
app.listen(100)
app.use(exp.static(__dirname))