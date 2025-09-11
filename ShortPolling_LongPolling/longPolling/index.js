const express =require("express");
const app = express();
let name = "Yashita (Initial Data)";
let pendingrequests = [];

app.get("/",(req,res)=>{
res.send(__dirname+"/index.html");
});

app.get("/getName",(req,res)=>{
    if(name !== req.query.lastName) {
        return res.json({name});
    }else{
    pendingrequests.push(res);
}
});

app.post("/updateName",(req,res)=>{
    name = req.query.name;
    while(pendingrequests.length > 0) {
        const client = pendingrequests.pop();
        client.json({name});
    }
    // name = "Yashita Prajapati (Updated Data)";
    // pendingrequests.forEach((request)=>{
    //     request.send({name});
    // });
    // pendingrequests = [];
});
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server Running on PORT ${port}`);
});