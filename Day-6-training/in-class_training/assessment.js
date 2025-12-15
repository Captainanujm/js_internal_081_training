const params=new URLSearchParams(window.location.search);
const username=params.get("username");
const password=params.get("password");
document.querySelector(".next-page").innerHTML=`<h1> Welcome ${username}`;