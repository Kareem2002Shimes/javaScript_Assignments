let addClass=document.querySelector(".classes-to-add");
let removeClass=document.querySelector(".classes-to-remove");
let currentEle=document.querySelector(".element-current");
let classList=document.querySelector(".classes-list div");

function SetClasses(curr,result){
    if (curr.classList.value===""){
        result.innerHTML="No Classes To Show";
    }else{
      curr.classList.value.split(" ").sort().map(function(el){
        let myClass=document.createElement("span");
        myClass.innerHTML=el;
        result.append(myClass);
      })
    }
};

// Printing The Main Classes Before Adding Or Removing
SetClasses(currentEle,classList);

// Adding classes

addClass.onblur=function(){
    let wordsAdd = addClass.value.trim().toLowerCase().split(" ");

    for (let i = 0; i < wordsAdd.length; i++) {
        currentEle.classList.add(wordsAdd[i]);
            
}
addClass.value="";
classList.innerHTML="";
SetClasses(currentEle,classList);
};

// Removing classes

removeClass.onblur=function(){
    let wordsRem = removeClass.value.trim().toLowerCase().split(" ");

    for (let i = 0; i < wordsRem.length; i++) {
        currentEle.classList.remove(wordsRem[i]);
            
}
removeClass.value="";
classList.innerHTML="";
SetClasses(currentEle,classList);
};
