//Callback hell
function step1(callback){
    setTimeout(()=>{
        console.log("Step1 Completed");
        callback();
    },2000)
}

function step2(callback){
    setTimeout(()=>{
        console.log("Step2 Completed");
        callback();
    },1000)
}

step1(()=>{
    step2(()=>{
        console.log("All steps completed");
    })
})
//callback
// function buyBike(callback){
//     setTimeout(()=>{
//         console.log("Bought royal");
//         callback();
//     },2000);
// }

// function planTrip(){
//     setTimeout(()=>{
//         console.log("Trip toLadakh plan");
//     },1000);
// }

// buyBike(planTrip);