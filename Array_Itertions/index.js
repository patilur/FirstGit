let arr = [12, 2, 3, 4, 1, 5];

// let ans=arr.map((no)=>{
//     return no*2;
// })
// console.log(ans);

// arr.forEach((no,index)=>{
//     console.log(no*index);
// })

// let ans=arr.filter((no)=>{
//     return no>4;
// })
// console.log(ans);

// let ans=arr.reduce((accu,curr)=>{
//     return accu+curr;
// },0);
// console.log(ans);

// let ans=arr.reduce((max,curr)=>{
//     if (max < curr) {
//         return curr;
//     } else {
//         return max;
//     }
// },arr[0])
// console.log(ans);
// let ans=arr.reduce((max,curr)=>{
//     return max > curr ? max : curr;
// },0)
// console.log(ans);

// let ans=arr.reduce((max,curr)=>{
//     if (max < curr) {
//         return curr;
//     } else {
//         return max;
//     }
// },arr[0])
// console.log(ans);


// console.log(arr.filter((no) => {

//     return no % 2 == 0;
// }));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
// console.log(arr.filter((no) => {

//     return no > 2;
// }));
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
// const op = arr.map((x) => {
//     return x * 2;
// })
// console.log(op);
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
// const opt = arr.reduce((curr, acc) => {
//     acc = acc + curr;
//     return acc;

// }, 0);
// console.log(opt);
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
// const max = arr.reduce((curr, acc) => {
//     if (curr < acc) {
//         curr = acc;
//     }
//     return curr;
// }, 0)
// console.log(max);
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
// arr.forEach((element, index, array) => {
//     console.log(element + " " + index + " " + array);
// });

// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
// const output = arr.find((x) => {
//     return x > 11;
// })
// console.log(output);

// let users = [
//     { id: 1, name: "Utkarsha",age:20 },
//     { id: 2, name: "Amit",age:25 },
//     { id: 3, name: "Riya",age:31}
// ];

// const output3=users.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]=acc[curr.age]+1;
//     }else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{})
// console.log("====",output3);

// let ans=users.map((x)=>{
//     return x.id+" "+x.name;
// })
// console.log(ans);

// let ans1=users.filter((x)=>{
//     return x.id>2
// }).map((x)=>{
//     return x.id+" "+x.name;
// })

// console.log(ans1);

// console.log(users.map((x) => {
//     return x.id + " " + x.name;
// }))

// const output1=users.filter((x)=>x.id>1).map((x)=>{
//     return x.name;
// })
// console.log(output1);



// let user = {
//     name: "UT",
//     Town: "Karjat"
// }
// // const ans=Object.values(user).map((x)=>{
// //     return x;
// // })

// const values = Object.values(user);

//const ans = `My name is ${values[0]} and I am from ${values[1]}`;

//console.log(ans);


//console.log(ans)
// const ans = `My name is ${user.name} and I am from ${user.Town}`;

// console.log(ans);

// let user1 = {
//     name1: "Utkarsha",
//     Town: "Karjat"
// };

// const { name1, Town } = user1;

// console.log(`My name is ${name1} and I am from ${Town}`);

let user = {
    name: "UT",
    Town: "Karjat"
};

const sentence = Object.entries(user).reduce((acc, [key, value]) => {
    if (key === "name") {
        return acc + `My name is ${value} `;
    }
    if (key === "Town") {
        return acc + `and I am from ${value}`;
    }
    return acc;
}, "");

let sentence1 = "";

Object.entries(user).forEach(([key, value]) => {
    if (key === "name") {
        sentence1 += `My name is ${value} `;
    }
    if (key === "Town") {
        sentence1 += `and I am from ${value}`;
    }
});

console.log(sentence1);

//console.log(sentence);

