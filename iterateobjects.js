let obj={
    "key1":"value1",
    "key2":"value2",
    "key3":"value3"
}

let arrayofKeys=Object.keys(obj);

arrayofKeys.forEach(key=>{
    console.log(obj[key]);
})