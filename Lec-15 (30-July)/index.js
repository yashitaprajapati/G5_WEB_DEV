// EXPRESS_JS_PART2 => index.js
const express = require('express')
const app = express()
const port = 3000
const expressRouter = express.Router();
// app.use('/secret', (req, res, next) => {
//     console.log('Accessing the secret section ...')
//     next()
// })

// // // GET method route
// app.get('/', (req, res) => {
//     res.send('GET request to the homepage')
// })

// // // POST method route
// app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
// })

// app.get('/splat*', async (req, res) => {
//     res.send('ok')
// })

// app.get('/splat*/:slug', async (req, res) => {
//     res.send('ok')
// })

// app.get(['/discussion|page|:slug'], async (req, res) => {
//     res.status(200).send('ok ')
// })

// app.get(['/discussion/:slug', '/page/:slug'], async (req, res) => {
//     res.status(200).send('ok')
// })

// app.get('/ab?cd',(req,res)=>{
//     res.send('ab?cd');
// })
// app.get('/ab+cd',(req,res)=>{
//     res.send('ab?cd');
// })
// app.get('/ab*cd',(req,res)=>{
//     res.send('ab?cd');
// })
// app.get('/.*fly$/', (req, res) => {
//   res.send('Regex route matched!');
// });

// app.get('/example/a', (req, res) => {
//   res.send('hello from A!');
// });



// app.get('/example/b', (req, res,next) => {
//     console.log("the output will be sent from next fucntion");
//     next()
// },(req,res)=>{
// res.send('hello from B!');
// });

// const cb0=function(req,res,next){
//     console.log("CB0");
//     next()
// }
// const cb1=function(req,res,next){
//     console.log("CB1");
//     next()
// }
// const cb2=function(req,res){
//     console.log("Hello from C!");


// }
// app.get('/example/d', [cb0,cb1,cb2],(req,res,next)=>{
//     console.log("the output will be sent from next fucntion");
//     next()
// },(req,res)=>{
//     console.log("this is D!")
// res.send('hello from D!');
// });

//=============================================
// const check=function(req,res,next){
//     console.log("do checking")
//     next()
// }
// const check2=function(req,res,next){
//     console.log("This is check2")
//     next()
// }
// app.get("/club",check,check2,(req,res)=>{
//     res.send("Welcome to the club!");
// })

//===============================================
// app.route('/book')
//   .get((req, res) => {
//     res.send('Get a random book')
//   })
//   .post((req, res) => {
//     res.send('Add a book')
//   })
//   .put((req, res) => {
//     res.send('Update the book')
//   })

//===============================================
// const router= express.Router();
const m1=function(req,res,next){
    console.log("this is M1")
    next()
}
const m2=function(req,res,next){
    console.log("This is M2")
    next()
}
app.get("/home",m1.m2,(req,res)=>{
    console.log("this is home route");
    res.send("Welcome to the home route!");
})
router.get('/login',m1,m2,(req,res)=>{
    console.log("this is login router page");
    res.send("Welcome to router login page!");
})
app.use ('/',router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
