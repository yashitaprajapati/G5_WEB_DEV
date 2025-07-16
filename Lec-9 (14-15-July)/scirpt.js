// console.log("SCRIPT JS");

// import { sumOfTwo, xy } from "./calculateTwo/sumOfTwo.js";
// import mulOfTwo from "./calculateTwo/mulOfTwo";
// import divOfTwo from "./calculateTwo/divOfTwo";

// // console.log(xy)

// // var xy =30000;

// // CALCULATOR



// console.log("XY",xy)
// sumOfTwo(10,20);
// mulOfTwo(10,20);
// divOfTwo(40,10);

// // const { divOfTwo, xy } = require("./divOfTwo");
// // const sumOfTwo = require("./sumOfTwo")

// const {divOfTwo,subOfTwo,sumOfTwo} =  require("./calculate")

// console.log("MODULE TUT")



// // function subOfTwo(a,b){
// //     console.log(a-b)   
// //     //230 lines
// //     //PAYMENT GATEWAY
// //     return a/b;
// // }



// sumOfTwo(10,20);
// divOfTwo(30,40);
// console.log(xy);
// subOfTwo(30,10)



//SYNCHRONOUS

var a =2;
var b =30;

function call(){
    console.log("CALL FUNCITON")
}

console.log(a);
call();
console.log(b);


//ASYNCHRONOUS

setTimeout(()=>{
    console.log("SETTIMEOUT 0")
},2000)

setTimeout(()=>{
    console.log("1")
},2000)

setTimeout(()=>{
    console.log("2")
},4000)

setTimeout(()=>{
    console.log("3")
},3000)