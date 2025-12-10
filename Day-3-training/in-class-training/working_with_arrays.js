// function getNum(a){
//     return a*2;
// }
// console.log(getNum(9));

// //how to declare array....
// let arr=[3,4,5,6];
// arr=[...arr,7]; //use of spread operator
// console.log(arr);

// //number with string array and passing function also
// let arr2=[5,6,7,"Anuj",true,getNum(67)];
// console.log(arr2);




//questions
// let fruits=["Banana","Guava","Strawberry","Mango","Grapes"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// fruits.push("papaya");

//     console.log(fruits[fruits.length-1]);
//     console.log(fruits.indexOf("Mango"));
//     fruits.shift(); //pops first element of array
//     console.log(fruits);
//     fruits.unshift("Banana"); //add at beginning
//     console.log(fruits);
//     console.log(fruits.includes("Black")); //check for index
//     fruits.pop();
//     console.log(fruits);


//     //using for of loop...
//     for(let values of fruits){
//         console.log(values);
//     }


//     let nums=new Array(1,3,4,7,9,45);
//     // // console.log(nums);

//     // // //using map function
//     // // let doublednums=nums.map(num=>num*2);
//     // // console.log(doublednums);


//     // //using filter function
//     // nums=nums.filter(n=>n%2==0);
//     // console.log(nums);

//     //using reduce
//   //Syntax- array.reduce((accumulator,currentValue)=>{...},initialValue);
// //   accumulator- store the values as loop continues..
// //   currentValue- Current element of array being processed...
// //   initialValue - Storing value in accumulator

// let totalSum=nums.reduce((sum,num)=>sum+num,0);
// console.log(totalSum)


//questions---
let nums=[2,4,6,8];
let doublednums=nums.map(num=>num*2);
console.log(doublednums);

let nums2=[10,25,30,5,60]
let filteredArray=nums2.filter(num=>num>20);
console.log(filteredArray);

let nums3=[1,2,3,4,5]
let totalsum=nums3.reduce((sum,num)=>{return sum+num},0);
console.log(totalsum);