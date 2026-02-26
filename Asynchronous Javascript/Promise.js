// function increment(value) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const newValue = value + 1;
//             resolve(newValue);
//         })
//     })
// }

// function double(value) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const newValue = value * 2;
//             resolve(newValue);
//         })
//     })
// }

// function square(value) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const newValue = value * value;
//             resolve(newValue);
//         }, 1000); 
//     });
// }
// // Starting value
// const startValue = 2;

// increment(startValue).then((res)=>{

//     double(res).then((res)=>{
//         square(res).then((res)=>{
//             console.log(res);
//         })
//     })
// })
