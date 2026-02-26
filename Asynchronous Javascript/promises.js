function buyBike() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bought Royal Enfield Himalayan");
        }, 2000);
    })
}

function planTrip() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Trip to Ladakh planned");
        }, 1000)
    })
}

function reachLadakh() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Reached Ladakh");
        }, 1000)
    })
}

function visitPangongLake() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Visited Pangong Lake");
        }, 500);
    })
}


buyBike().then((result) => {
    console.log(result);
    planTrip().then((result) => {
        console.log(result);
        reachLadakh().then((result) => {
            console.log(result);
            visitPangongLake().then((res)=>{
                console.log(res);
            })
        });
    });

});



// function bookSearch(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const bookFound=Math.random()>0.5;
//             if(bookFound){
//                 resolve("Book Found");
//             }else{
//                 reject("Book not found");
//             }
//         },2000)
//     })
// }

// bookSearch()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })