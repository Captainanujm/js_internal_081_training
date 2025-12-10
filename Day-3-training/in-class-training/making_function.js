function getNum(a){
    return a*2;
}
console.log(getNum(9));

//how to declare array....
let arr=[3,4,5,6];
arr=[...arr,7]; //use of spread operator
console.log(arr);

//number with string array and passing function also
let arr2=[5,6,7,"Anuj",true,getNum(67)];
console.log(arr2);