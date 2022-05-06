setTimeout(function(){
   let box=document.createElement("div");
   box.className="box";
   let closeBotton=document.createElement("button");
   closeBotton.className="close-botton";
   closeBotton.innerHTML="x";
   box.append(closeBotton);
   closeBotton.onclick=()=>box.remove();
   let header=document.createElement("h1");
   header.className="header";
   header.innerHTML="Welcome";
   box.append(header);
   let content=document.createElement("p");
   content.className="content";
   content.innerHTML="Welcome To Elzero Web School";
   box.appendChild(content);
   document.body.appendChild(box);
},5000);

