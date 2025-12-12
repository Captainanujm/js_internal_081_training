let source1="https://images.pexels.com/photos/31207065/pexels-photo-31207065.jpeg"
let source2="https://images.pexels.com/photos/30282896/pexels-photo-30282896.jpeg/"
document.querySelector("img").setAttribute("src",source1);
document.querySelector(".btn-1").addEventListener("click",()=>{
    document.querySelector("img").setAttribute("src",source1);
})
document.querySelector(".btn-2").addEventListener("click",()=>{
    document.querySelector("img").setAttribute("src",source2);
})
