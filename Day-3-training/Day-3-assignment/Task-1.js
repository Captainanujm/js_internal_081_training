let marks=[80,90,70,85,95];
let avg=marks.reduce((avg,num)=>{return avg+num},0);
avg=avg/marks.length;
console.log(avg);