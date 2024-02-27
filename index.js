
  const express=require("express");
  const user=express();
  const path =require("path");

    const port=3000;
 
 user.set("views engine","ejs");
 user.set("backs",path.join(__filename,"/backs"));
    user.listen(port,()=>{
        console.log("hello world to embedded javascript templating language to create html pages and greate web pages ",port);
    })

  
  user.get("/suhail",(req,res)=>{
    // console.log(req);

    // const back ="<h1>hello world to embedded language template";
    res.render("backs.ejs");
    // res.send(back);

  });

  user.get("",(req,res)=>{

  res.send("didnt root directiries");
  });
