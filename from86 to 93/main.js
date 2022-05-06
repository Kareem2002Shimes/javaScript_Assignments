let eleNum=document.querySelector("[name='elements']");
let eleTxt=document.querySelector("[name='texts']");
let opt=document.querySelector("select");
let sub=document.querySelector("[name='create']");
let results=document.querySelector(".results");

let eletype,eletxtcol;           // box variables 

sub.onclick=function(){
    document.querySelectorAll(".results .box").forEach((box) => {
        box.remove();
    });
    opt.value==="Div"? eletype="div":eletype="section";
    for (let i=0;i<eleNum.value;i++){
        let myEle=document.createElement(eletype);
        results.appendChild(myEle);
        let eletxtcol=document.createTextNode(eleTxt.value);
        myEle.appendChild(eletxtcol);
        myEle.setAttribute("class","box");
        myEle.setAttribute("title","Element");
        myEle.setAttribute("id",`id-${i+1}`);
    }
}





// prevent Submit
document.forms[0].onsubmit=function(ele){
    ele.preventDefault();
}

