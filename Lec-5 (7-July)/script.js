
// let arr=[2,3,4,5,6,7,8];
// let arr2=[5,5,5,6,7,8];
// const newArr= arr.map((x)=>x*2);

// console.log(newArr);

// function doubleData(x){
//     return x*x;
// }
// Array.prototype.mapReplica=(logic)=>{
//     let outputArr =[];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }
// const myProtoData=arr2.mapReplica(doubleData);
// console.log(myProtoData);

// const words=["spray","elite","exuberant","destruction","present"];

// const result = words.filter((word)=>word.length>6);
// Array.prototype.filterReplica = function (logic) {
//     let outputArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if(logic(this[i])){
//         outputArr.push(this[i]);
//     }
//     }
//     return outputArr;
// };
// const result = words.filterReplica((word) => word.length > 6);
// console.log(result);


// Reduce on js

 const array1 =[1,2,3,4];
const initialValue =0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
function myLocgic(acc,curr){
    return acc+curr;
}
Array.prototype.reduceReplica= function (logic,initialValue){
    let result=initialValue;
     for (let i = 0; i < this.length; i++) {
        result =logic(result,this[i]);
    }
    return result ;
}

const finalAnswer =array1.reduceReplica((acc,curr)=>acc+curr,0)
console.log(finalAnswer);

const sumWithInitial2 = array1.reduceReplica(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);