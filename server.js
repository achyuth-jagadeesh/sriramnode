const express = require("express");
const bodyParser = require("body-parser");

const app =  express();


app.use(bodyParser.json());

app.get("/hello",function(req,res){
   res.send({msg:"Hello world"});
});


app.post("/hello",function(req,res){
    console.log(req.body);
    res.send({msg:"Hello "+ req.body.name });
 });
 





app.listen(3000, function(){
   console.log("Server started @ http://localhost:3000")
});