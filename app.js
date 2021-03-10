var express=require('express');
var bodyParser=require("body-parser")
var app=express();
var i1=[];
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
	//res.send("<h1>Hey bhai</h1>");
	res.render("list",{newListItems:i1});

})
app.post("/",function(req,res){
	 i=req.body.n;
	 i1.push(i);
	//console.log(i)
	//res.render("list",{newListIteam:i})
	res.redirect("/");

})
app.listen(3000,function() {
console.log("Listening to port 3000");
})