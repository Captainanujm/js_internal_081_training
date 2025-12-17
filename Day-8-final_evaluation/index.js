const params=new URLSearchParams(window.location.search);
const value1=params.get("input-name");
const value2=params.get("input-email");
document.querySelector("#para").innerText=`your name ${value1}`;