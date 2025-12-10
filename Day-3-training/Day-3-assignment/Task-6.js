let arr = [10, 40, 25, 80, 15];
let max=Number.MIN_VALUE;
for(let i=0;i<arr.length;i++){
    // if(max<arr[i]){
    //     max=arr[i];
    // }
    max=max<arr[i]?arr[i]:max //ternary operator
}
console.log(max);