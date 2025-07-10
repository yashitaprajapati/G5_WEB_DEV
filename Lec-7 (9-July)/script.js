console.log("Start Script")

// async function fetchData() {
//     const data = await fetch("This is the data "+"https://dummyjson.com/products");
//     const finall= await data.json();
//     console.log(data);
// }
// fetchData();


// const mypromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I will complete the assigment ");
//     },3000)
// });
// async function check(){
//     const assigment=  await mypromise;
//     console.log(assigment);
// }
// check();

// DOM- 
// event capturing - goes from top to buttom 
// and event bubbling - buttom to top 
// add event listener- to let know that a event is happening and it captures it like button is clicked.

// const grandParent = document.getElementById('grandparent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// grandParent.addEventListener('click',()=>{
//     console.log("This is a Grandparent Div")
// },true);

// parent.addEventListener('click',()=>{
//     console.log("This is a parent Div")
// },true);

// child.addEventListener('click',()=>{
//     console.log("This is a child Div")
// },true);


///////////////////////////////////////////////////////////////////

function admissionProcess(studentName,StudentClass,studentZone){
    console.log(`hi ${this.studentName},from class ${this.StudentClass},this is your zone `)
}
const student1={
    studentName:"yashita",
    StudentClass:"G-5"
}
const student2={
    studentName:"pulkit",
    StudentClass:"G-4"
}
admissionProcess.call(student1);