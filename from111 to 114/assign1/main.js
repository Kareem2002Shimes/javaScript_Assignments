let firstName=document.querySelector(" [name='fname']");
let lastName=document.querySelector(" [name='lname']");
let email=document.querySelector(" [name='email']");
let options=document.querySelector(" [name='option']");

if (sessionStorage.fname){
    firstName.value = sessionStorage.getItem("fname");
}
if (sessionStorage.lname){
    lastName.value = sessionStorage.getItem("lname");
}
if (sessionStorage.email){
    email.value=sessionStorage.getItem("email");
}
if (sessionStorage.options){
    options.value=sessionStorage.getItem("options");
}
let allInputs=document.querySelectorAll(".box input");

allInputs.forEach((input)=>{
    input.onblur=function(){
        sessionStorage.setItem(input.name,input.value);
    }
    
})
options.onchange=function(){
    sessionStorage.setItem("options",options.value);
}






