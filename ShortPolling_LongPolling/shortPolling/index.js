const express =require("express");
const app = express();
let name = "Yashita (Initial Data)";

app.get("/",(req,res)=>{
res.send(__dirname+"/index.html");
});

app.get("/getName",(req,res)=>{
    res.send({name});
});

app.post("/updateName",(req,res)=>{
    name = "Yashita Prajapati (Updated Data)";
    res.send({name});
});
const port = process.env.PORT || 5010;

app.listen(port,()=>{
    console.log(`Server Running on PORT ${port}`);
});