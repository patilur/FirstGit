// Write your code here:
async function picnicDecision() {
    try {
        const task = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSunny = Math.random() > 0.5;
                if (isSunny) {
                    resolve("Let us go for picnic");
                } else {
                    reject("Error: It is cloudy");
                }
            }, 2000)
        })
        console.log(task);
    } catch (error) {
        console.log(error);
    }
}
picnicDecision();

// async function boardingBus() {
//     try {
//         // Write your code here
//         const task1 = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const busArrivesAt10 = Math.random() > 0.5;
//                 if (busArrivesAt10) {
//                     resolve("Board the bus");
//                 } else {
//                     reject("Error: Bus is late");
//                 }
//             }, 3000)
//         })
//         console.log(task1);
//     } catch (error) {
//         console.log(error);
//     }
// }

// boardingBus();

