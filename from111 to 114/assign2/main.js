let fontFamily=document.querySelector("[name='font-f']");
let fontColor=document.querySelector("[name='font-c']");
let p=document.querySelector(".down-box p");
let fontSize=document.querySelector("[name='font-s']");

if (localStorage.getItem("fontFamily")){
    fontFamily.value=localStorage.getItem("fontFamily");
    p.style.fontFamily=localStorage.getItem("fontFamily");
}
if (localStorage.getItem("fontColor")){
    fontColor.value=localStorage.getItem("fontColor");
    p.style.color=localStorage.getItem("fontColor");
}
if (localStorage.getItem("fontSize")){
    fontSize.value=localStorage.getItem("fontSize");
    p.style.fontSize=localStorage.getItem("fontSize");
}
// if (){

// }

fontFamily.onchange=function(){
    p.style.fontFamily=fontFamily.value
    localStorage.setItem("fontFamily",fontFamily.value)
    }

fontColor.onchange=function(){
p.style.color=fontColor.value
localStorage.setItem("fontColor",fontColor.value)
}

fontSize.onchange=function(){
p.style.fontSize=fontSize.value
localStorage.setItem("fontSize",fontSize.value)
}