console.log("Start scipt");

// function walkInRes(){
//     setTimeout(()=>{
//         console.log("Walking to the restaurant");
//     },3000);
// }
function walkInRes(cb){
    console.log("I am walking to the res");
    setTimeout(cb,3000);
}
function checkMenu(cb){
    console.log("I am checking the menu");
    setTimeout(cb,2000);
}
function orderFood(cb){
    console.log("I am ordering food");
    setTimeout(cb,5000);
}
function HavingLunch(cb){
    console.log("I am having lunch");
    setTimeout(cb,6000);
}
function paybill(cb){
    console.log("I am paying the bill");
    setTimeout(cb,3000);
}
function walkout(cb){
    console.log("I am walking out of the res");
    setTimeout(cb,3000);
}

// function checkMenu(){
//     setTimeout(()=>{
//         console.log("I am checking the menu");
//     },2000);
// }

// function orderFood(){
//     setTimeout(()=>{
//         console.log("I am ordering the food");
//     },5000);
// }