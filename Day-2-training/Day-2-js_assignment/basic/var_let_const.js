var a=32;
console.log(a);//fine 32 is printed
let b=89;
console.log(b) //fine 89 is printed
{
    let h=56;
    var j=78;
    console.log(h) //fine 56 is printed
    console.log(j) //fine 78 is printed
}
console.log(h) //error because let limits its scope to block
console.log(j) //no error because var does not limits its scope to block

const n=90;
console.log(n) //fine 90 is printed
n=89;//error const cannot be changed..