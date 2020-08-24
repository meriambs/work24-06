 function changestyle(color,paracol,hcol,psty,hsty) { 
   document.body.style.background = color; 
   let parg = document.getElementsByTagName("P");
  
   for (let i = 0; i < parg.length; i++) {
     parg[i].style.color = paracol;       parg[i].style.fontFamily = psty;
   }
   let head=document.querySelectorAll("h1, h2, h3, h4, h5, h6");
 for (let i = 0; i < head.length; i++) {
      head[i].style.color = hcol;
       head[i].style.fontFamily = hsty;
   }  
 }


  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load",function(){
 
   showPopup();
   // setTimeout(function(){
   //   loginPopup.classList.add("show");
   // },5000)

  })

  function showPopup(){
        const timeLimit = 10 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
         } 
         console.log(i)
        },1000);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })
  


