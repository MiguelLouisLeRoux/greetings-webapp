document.addEventListener('DOMContentLoaded', ()=>{
   const theGreet = document.querySelector(".greeting");
   const flashErrorMessage = document.querySelector(".flashError");
   const flashSuccessMessage = document.querySelector(".flashSuccess");

   if (flashSuccessMessage) {
        if (flashSuccessMessage.hasChildNodes()) {
            setTimeout(function (){
                flashSuccessMessage.innerHTML = "";
            }, 3000);
            
        }
    }

    if (flashErrorMessage) {
        if (flashErrorMessage.hasChildNodes()) {
            setTimeout(function (){
                flashErrorMessage.innerHTML = "";
            }, 3000);  
       }
    }

   if (theGreet.hasChildNodes()) {
       setTimeout(function (){
            theGreet.innerHTML = "";
       }, 3000); 
    }
});
