(function () {
  "use strict";

  const toggleBtn = document.querySelector(".toogle__btn");

  const floatingBtns = document.querySelectorAll(".floating__btn");

  toggleBtn.addEventListener("click", (evt) => {
    const msgBtn=document.querySelector(".toogle__btn1");

    if (msgBtn.classList.contains("bi-chat-right-text")) {
      msgBtn.className ="bi bi-x-circle toogle__btn1"
      
    }else {
      msgBtn.className ="bi bi-chat-right-text toogle__btn1"
    }
      
    

    floatingBtns.forEach(floatingBtn=> {

      const shown = floatingBtn.classList.contains("floating__btn-hide");
      if (shown) {
        floatingBtn.classList.remove("floating__btn-hide");
        floatingBtn.classList.add("floating__btn-show");
      } else {
        floatingBtn.classList.add("floating__btn-hide");
        floatingBtn.classList.remove("floating__btn-show");
      }
    });
  });
})();
