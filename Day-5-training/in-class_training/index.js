
// function clickme2(){
//     document.querySelector(".btn-2").innerText="changed from button 2"
// }
// function usingEventListener(){
    
//     document.querySelector(".mybutton-1").addEventListener("click",function green(){
//         document.querySelector(".btn-1").innerText="red";
//          document.querySelector("body").style.background="blue";
//     });

   


// }
// usingEventListener();


let password="my-org-password"
function usingSubmitFormEvent(e){
    e.preventDefault();
    let valueinname=document.querySelector("#input-1").value;
    let valueinpassword=document.querySelector("#input-2").value;
   
        if(valueinpassword==""){
            alert("password must not be blank")
        }
        else if(valueinpassword!=password){
            alert("wrong password");
        }else{
            alert("Your are all set !")
        }

}
 document.querySelector("#form-id").addEventListener("submit",usingSubmitFormEvent);