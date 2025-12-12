document.querySelector(".btn").addEventListener("click",()=>{
    if( document.querySelector(".hello").style.display==="none"){
        document.querySelector(".hello").style.display="block";
        document.querySelector(".btn").innerText="Hide paragraph"
    }
    else{
        document.querySelector(".hello").style.display="none";
        document.querySelector(".btn").innerText="Show paragraph"
    }

})