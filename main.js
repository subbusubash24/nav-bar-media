var btn=document.querySelector(".toggle")
var nav=document.querySelector("nav")
btn.addEventListener("click",()=>{
    let x=window.getComputedStyle(nav).display
    if(x=="none"){
        nav.style.display="block"
    }else{
        nav.style.display="none"
    }
})
