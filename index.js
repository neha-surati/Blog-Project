const express= require ('express');

const app=express();

app.listen(8081,(err)=>{
    if(!err){
        console.log("server start: http://localhost:8081");
    }
})