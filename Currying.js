// function A(a){
//     return function(b){
//         return a+b;
//     }
// }
// //console.log(A(2)(3));
// let sum=A(5);
// console.log(sum(4));

// function count(){
//     let count=0;
//     return function B(){
//         count++;
//         console.log(count);
//     }
// }
// let fun=count();
// fun();
// fun();

// let obj={
//     name:"Utkarsha",
//     lname:"Patil"
// }

// function printDetails(param,param1){
//     console.log(this.name+" "+this.lname+" "+param+""+param1);
// }

// //printDetails.call(obj,"Karjst");


// //printDetails.apply(obj,["Karjst","konlhapur"]);

// let print=printDetails.bind(obj);
// print();
//Dependent promises
function A() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = Math.random() > 0.5;
            if (time) {
                resolve("Done");
            } else {
                reject("Reject");
            }
        }, 2000)
    })
}

function B() {
new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = Math.random() > 0.5;
            if (time) {
                resolve("Done B");
            } else {
                reject("Reject B");
            }
        }, 2000)
    })
}

// A().then((res)=>{
//     console.log(res);
//     return B();
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//Independent promises
// const A=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const time = Math.random() > 0.5;
//         if (time) {
//             resolve("Done");
//         } else {
//             reject("Reject");
//         }
//     }, 2000)
// })


// const B=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const time = Math.random() > 0.5;
//         if (time) {
//             resolve("Done B");
//         } else {
//             reject("Reject B");
//         }
//     }, 2000)
// })

// Promise.all([A,B])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })




