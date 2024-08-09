import mongoose from "mongoose";



//establishing a connection to mongodb database
mongoose.connect("mongodb+srv://ShubhamSm009:admin@cluster0.ohtho.mongodb.net/MainDatabase");


const objectSchema=new mongoose.Schema({
            end_year:String,
            intensity: Number,
            sector: String,
            topic: String,
            insight:String,
            url: String,
            region: String,
            start_year: String,
            impact: String,
            added: String,
            published: String,
            country: String,
            relevance: Number,
            pestle: String,
            source: String,
            title: String,
            likelihood: Number
});


const myCollectionModel=mongoose.model("MainCollection",objectSchema);






export default myCollectionModel;