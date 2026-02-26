// let Person = {
//     name: "Utkarsha",
//     lname: "Patil",
//     age: "20"
// }

// let prinFullNmae = function () {
//     console.log(this.name + " " + this.lname + " " + this.age);
// }

// let prinFull = function (hometown, dis) {
//     console.log(this.name + " " + this.lname + " " + this.age + " " + hometown + " " + dis);
// }
// prinFullNmae.call(Person);
// prinFull.call(Person,"karjat", "Kolhapur")
// prinFull.apply(Person, ["karjat", "Ahmednagr"])

// let printMyname=prinFull.bind(Person,"Mumbai","Nagar");
// printMyname();

const obj={num:2}

var addToThisOne=function(a){
    return this.num+a;
}

var addToThis=function(a,b,c){
    return this.num+a+b+c;
}
const arr=[2,3,4]
console.log(addToThisOne.call(obj,3));

console.log(addToThis.apply(obj,arr));

const sum=addToThisOne.bind(obj,3);
console.log(sum());