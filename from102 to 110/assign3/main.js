let div=document.createElement("div");
div.innerHTML="10";
div.innerHTML=div.innerHTML++;
let counter=(setInterval(countDown,1000))

function countDown(){
   div.innerHTML-=1;
   if (div.innerHTML==="0"){
      clearInterval(counter);
   }
}

document.body.appendChild(div);
