console.log("start script");
// const ListOfProducts = document.getElementById("List of products");
// ListOfProducts.addEventListener("click",(event)=>{
//     if(event.target.tagName =="LI"){
//         console.log("CLICKED  ON :",event.target.textContent);
//     }
// })

const newProduct = document.createElement("li");
newProduct.textContent= "Mobile Phone ";
ListOfProducts.appendChild(newProduct);

const searchBox = document.getElementById("searchHandle");
let timeOutID;
searchBox.addEventListener("input",(event)=>{
    clearTimeout(timeOutID);
    timeOutID=setTimeout(()=>{
    console.log(event.target.value);
    },2000)
    
})

//closure
// function closure(){
//     var abc=10;
//     console.log(abc);
//     function closure2(){
//         var def=20;
//         console.log(abc);
//         console.log(def);
//     }
//     closure2();
// }
// closure();

// for(var i=0;i<=5;i++){
//     function closure(i){
//     setTimeout(()=>{
//         console.log(i)
//     },3000)
// }
// closure(i)
// }