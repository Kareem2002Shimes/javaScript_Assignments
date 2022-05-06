let div=document.createElement("div");
div.innerHTML="10";
div.innerHTML=div.innerHTML++;
setInterval(countDown,1000);

function countDown(){
   div.innerHTML-=1;
   if (div.innerHTML==="0"){
     window.open("https://elzero.org/","_self")
   }
}

document.body.appendChild(div);
