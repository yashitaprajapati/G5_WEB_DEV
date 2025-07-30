const express= require('express');
const app = express();
const port = 3000;

// app.get('/',(req,res)=>{
//     res.send("Hello world")
// })
// app.get('/',(req,res)=>{
//     res.send("User");
// })
// app.get('/user',(req,res)=>{
//     res.send("this is the user");
// })
// app.get('/user',(req,res)=>{
//     res.send("this is the request");
// })
// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

app.use('/',(req,res)=>{
    res.send("Hello")
})
app.use('/profile',(req,res)=>{
  res.send("Hello profile");
})
app.use('/user',(req,res)=>{
  res.send("Hello world");
})
app.use('/user2',(req,res)=>{
  res.send("Hello world");
})
app.use('/',(req,res)=>{
    res.send("Hello")
})
app.listen(port,()=>{
    console.log("this is console");
})