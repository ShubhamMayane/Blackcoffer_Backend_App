import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import cors from "cors";




//establishing a connection to mongodb database
mongoose.connect("mongodb+srv://user_1:admin@cluster0.ohtho.mongodb.net/MainDatabase");


const objectSchema=new mongoose.Schema({
            
            intensity: Number,
            topic: String,
           region: String,
            start_year: String,
            country: String,
            relevance: Number,
            likelihood: Number
});


const myCollectionModel=mongoose.model("MainCollection",objectSchema);





const app=express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const port =process.env.PORT || 5000;



app.listen(port,function(){

    console.log("Server is running at port "+port);
    
});


app.get("/",function(req,res){

    res.send("Jay ganesh");
});


app.get("/getData",function(req,res){

    res.send("Jay ganesh");
});






app.get("/getAllData",function(req,res){

    //3.get all documets (as a array of json objects) from database
    myCollectionModel.find({}).then(function(data) {

    console.log(data);
      


     res.json(data);

   }).catch(function (err) {
     console.log(err);
   });
});




