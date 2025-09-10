const express = require("express");

const app = express();




const port = process.env.PORT  || 5011
app.listen(port,()=>{
    console.log(`Server Running on PORT ${port}`)
})