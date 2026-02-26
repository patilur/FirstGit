// function add(a){
//     return function(b){
//         return a+b;
//     }
// }

// let ans=add(5);
// console.log(ans(6));

const add=(a)=>(b)=>{
    return a+b;
}

console.log(add(4)(4));

//count zeros
// let arr=[1,1,1,0,0,0,0]

// function CountZeros(arr){
//     let n=arr.length;
//     let left=0;
//     let rigth=n-1;
//     let count=-1;
    

//     while(left<=rigth){
//         let mid=Math.floor((left+rigth)/2);
        
//         if(arr[mid]==0){
//             count=mid;
//             rigth=mid-1;
//         }else{
//             left=mid+1;
//         }
//     }
//     if(count==-1)
//         return 0;
//     return n-count;
    
// }
// console.log(CountZeros(arr))
//leader in array
// let nums=[16,17,4,3,2];

// function leadersInArray(nums){
//     let leader=[];
//     let maxFromRight=nums[nums.length-1];
//     let n=nums.length-1;

//     leader.push(maxFromRight);
//     for(let i=n-2;i>=0;i--){
//         if(nums[i]>maxFromRight){
//             maxFromRight=nums[i];
//             leader.push(nums[i]);
//         }
//     }
//     return leader.reverse();
// }
// console.log(leadersInArray(nums));