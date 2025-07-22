const https = require("node:http");
const blogPost =[
    {
        "blog title":"this is my blog",
        "blog description" :"this is description",
        "Autor":"Yashita",
        "Date":"22-07-2025"
    }
]
const server = https.createServer((req,res)=>{
    if(req.method =="GET" && req.url == "/"){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("DATA FETCHED RESPONSE SEND")
    }
    else if(req.method =="GET" && req.url == "/blog"){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(blogPost));
    }
    else{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("NOT FOUND")
    }
})
server.listen(8000,()=>{
    console.log("Your server running on port 8000");
})