const person = { name: "Utkarsha", age: 20, city: "Pune" };

const person1 = [{ name: "Utkarsha", age: 20, city: "Pune" },
{ name: "Harsh", age: 20, city: "Pune" },
{ name: "Pritam", age: 20, city: "Pune" }]

person1.map((x) => {
    console.log(x.name + " " + x.age)
});
console.log("1 .-------------------------------------------")

Object.entries(person).reduce((acc, [key, value]) => {
    console.log(key + " " + value);
}, "")

console.log("2.-------------------------------------------")
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
});

console.log("3.-------------------------------------------")
Object.entries(person).map(([key, value]) => {
    console.log(`${key}: ${value}`);
});

console.log("4.-------------------------------------------")
for (const [key, value] of Object.entries(person)) {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

console.log("5.-------------------------------------------")
Object.keys(person).forEach((key) => {
    console.log(`${key} ${person[key]}`);
});

console.log("6.-------------------------------------------")
Object.values(person).forEach((value) => {
    console.log(`${value} `);
});