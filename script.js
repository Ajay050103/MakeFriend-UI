let button = document.querySelectorAll(".btn");

button.forEach((btn) => {
   btn.addEventListener('click',function(){
      let h5 = btn.previousElementSibling;
      if(btn.textContent==="Add Friend"){
         btn.textContent="Remove Friend";
         h5.textContent="Friend";
         h5.style.color="lightgreen"
      }
      else{
         btn.textContent="Add Friend"
         h5.textContent="Stranger"
         h5.style.color="red"
      }
   })
});