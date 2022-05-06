let div=document.createElement("div");
div.innerHTML="10";
div.innerHTML=div.innerHTML++;
let counter=(setInterval(countDown,1000))

function countDown(){
   div.innerHTML-=1;
   if (div.innerHTML==="0"){
      window.open("https://elzero.org","_blank","width=500 height=400 left=200 top =200")
      clearInterval(counter);
   }
}

document.body.appendChild(div);
