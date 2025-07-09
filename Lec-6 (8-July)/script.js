console.log("START SCRIPT");
// const myPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I will get the placement");
//     },3000);
// });
// myPromise
// .then((res)=>console.log(res))

// .then(()=> setTimeout(()=>{
//     console.log("I will party after placement");
// },3000))

// .then(()=> setTimeout(()=>{
//     console.log("I will work");
// },4000))

// .then(()=> setTimeout(()=>{
//     console.log("I got layed off");
// },2000))

// .catch((err)=>console.log(res))

function myplacement(placementSteps, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yashita will get the placement: " + placementSteps);
      console.log(placementSteps);
    }, delay);
  });
}

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I will get placement - 1");
  }, 5000);
});
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I will get placement - 2");
  }, 3000);
});
const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I will get placement - 3");
  }, 4000);
});
const myPromise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I will get placement - 4");
  }, 5000);
});

    Promise.all([myPromise1, myPromise2, myPromise3, myPromise4])
    .then((res) => {
        console.log("All");
        console.log(res);
    })
    .catch((err) => {
        console.error("failed:", err);
    });

Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4])
  .then((res) => {
    console.log("AllSettled");
    console.log(res);
  });


Promise.any([myPromise1, myPromise2, myPromise3, myPromise4])
  .then((res) => {
    console.log("any");
    console.log(res);
  })
  .catch((err) => {
    console.error("Failed:", err);
  });
  Promise.race([myPromise1, myPromise2, myPromise3, myPromise4])
  .then((res) => {
    console.log("race");
    console.log(res);
  })
  .catch((err) => {
    console.error("Failed:", err);
  });
// Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4]);
// Promise.any([myPromise1,myPromise2,myPromise3,myPromise4]);
// Promise.race([myPromise1,myPromise2,myPromise3,myPromise4]);


// myplacement("Yashita got the placement",5000)
// .then(()=>myplacement("Party time"),5000)
// .then(()=>myplacement("Yashita is working"),3000)
// .then(()=>myplacement("layoff"),1000)
// console.log(myplacement);
