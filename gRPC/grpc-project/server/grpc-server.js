const express = require("express");

const app = express();




const port = process.env.PORT  || 5012
app.listen(port,()=>{
    console.log(`Server Running on PORT ${port}`)
})