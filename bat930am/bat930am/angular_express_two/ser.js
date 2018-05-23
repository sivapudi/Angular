exp=require("express")
app=exp()
app.listen(1234)
app.use(exp.static(__dirname))