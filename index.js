import express from "express";

import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));

import myCollectionModel from __dirname+"/databaseLogic.js";



const app=express();


app.use(bodyParser.urlencoded({extended:true}));

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






// app.get("/getAllData",function(req,res){

//     //3.get all documets (as a array of json objects) from database
//     myCollectionModel.find({}).then(function(data) {

//     console.log(data);
      
//   //  to print 1st element in array
//      console.log(data[0]);
        
//      //filter 1 :removing empty value data

//      let finalData=data.filter((item)=>(item.intensity!=""&& item.country!="" && item.likelihood!="" && item.relevance !="" && item.start_year!="" && item.topic!="" && item.region!=""));
     
//      //filter 2 :removing unwanted keyvalue pairs
     
//   let finalData2=finalData.map((item)=>{
//     return{
//           intensity:item.intensity,
//           country:item.country,
//           likelihood:item.likelihood,
//           relevance:item.relevance,
//           start_year:item.start_year,
//           topic:item.topic,
//           region:item.region,
//           city:item.city

//       };
//   });

//   //filter 3:
  
//   const removeDuplicates = (array) => {
//     const seen = new Set();
   
//     let myArray= array.filter(item => {
//         const serializedItem = JSON.stringify(item);
//         return seen.has(serializedItem) ? false : seen.add(serializedItem);
//     });

//     return myArray;
// };

//     let finalData3=removeDuplicates(finalData2);

//     console.log(finalData3.length);


//      res.json(finalData3);

//    }).catch(function (err) {
//      console.log(err);
//    });
// });




// app.get("/getAllTopics",function(req,res){


//     //3.get all documets (as a array of json objects) from database
//     myCollectionModel.find({}).then(function(data) {

//        console.log(data);
         
//      //  to print 1st element in array
//         console.log(data[0]);
           
//         //filter 1 :removing empty value data
   
//         let finalData=data.filter((item)=>(item.intensity!=""&& item.country!="" && item.likelihood!="" && item.relevance !="" && item.start_year!="" && item.topic!="" && item.region!=""));
        
//         //filter 2 :removing unwanted keyvalue pairs
        
//      let finalData2=finalData.map((item)=>{
//        return(item.topic);
             
//      });
   

//      let finalData3=[];

//      finalData2.forEach((element)=>{

//        if(finalData3.includes(element)==false)
//        {
//            finalData3.push(element);
//        }

//      });

//      res.json(finalData3);
   

// })
// });



// app.get("/getAllYears",function(req,res){


//     //3.get all documets (as a array of json objects) from database
//     myCollectionModel.find({}).then(function(data) {

//        console.log(data);
         
//      //  to print 1st element in array
//         console.log(data[0]);
           
//         //filter 1 :removing empty value data
   
//         let finalData=data.filter((item)=>(item.intensity!=""&& item.country!="" && item.likelihood!="" && item.relevance !="" && item.start_year!="" && item.topic!="" && item.region!=""));
        
//         //filter 2 :removing unwanted keyvalue pairs
        
//      let finalData2=finalData.map((item)=>{
//        return(item.start_year);
             
//      });
   

//      let finalData3=[];

//      finalData2.forEach((element)=>{

//        if(finalData3.includes(element)==false)
//        {
//            finalData3.push(element);
//        }

//      });

//      res.json(finalData3);
   

// })
// });


