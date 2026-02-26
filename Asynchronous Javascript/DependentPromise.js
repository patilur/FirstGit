// Write your code at relevant places in the code below:
function orderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let foodDelivered = Math.random() > 0.5;
            if (foodDelivered) {
                resolve("Food delivered");
            } else {
                reject("Food not delivered");
            }
        }, 2000);
    });
}

function orderDessert() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dessertDilvered = Math.random() > 0.5;
            if (dessertDilvered) {
                resolve("Dessert delivered");
            } else {
                reject("Dessert not delivered");
            }
        }, 2000);
    });
}


orderFood()
    .then((foodMesg) => {
        console.log(foodMesg);
        return orderDessert();
    })
    .then((desMsg) => {
        console.log(desMsg);
        console.log("Dream Meal fullfilled");
    })
    .catch((err) => {
        console.log(err);
        console.log("Dream Meal failed");
    })

