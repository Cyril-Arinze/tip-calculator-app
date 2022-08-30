(function () {
  "use strict";

  const tipButtons = document.querySelectorAll(".input2>button");

  const tipPerPerson = document.querySelector(".Tip-person");

  const totalPerPerson = document.querySelector(".Total-person");

  const resetBtn = document.querySelector(".Reset-btn");

  const errorMsg1 = document.querySelector(".error-msg1");

  const errorMsg2 = document.querySelector(".error-msg2");

  const customValue = document.querySelector("#custom");

  function tipCalculator(percentage) {
    const bill = parseFloat(document.querySelector("#bill").value);

    const numberOfPeople = parseInt(
      document.querySelector("#Number-people").value
    );

    if (bill && numberOfPeople) {
      errorMsg1.classList.add("hidden");
      errorMsg2.classList.add("hidden");

      const tipPerPersonCal = (
        ((percentage / 100) * bill) /
        numberOfPeople
      ).toFixed(2);

      const totalPerPersonCal = (
        bill / numberOfPeople +
        ((percentage / 100) * bill) / numberOfPeople
      ).toFixed(2);

      tipPerPerson.innerHTML = `$${tipPerPersonCal}`;
      totalPerPerson.innerHTML = `$${totalPerPersonCal}`;

      resetBtn.removeAttribute("disabled");

      resetBtn.addEventListener("click", function () {
        tipPerPerson.innerHTML = `$0.00`;
        totalPerPerson.innerHTML = `$0.00`;


        if (tipPerPerson.innerHTML === `$0.00`) {
          resetBtn.setAttribute("disabled", "disabled");
        }

        for (let i = 0; i < tipButtons.length; i++) {
          tipButtons[i].classList.remove("active");

        }
      });
    } else if (bill) {
      errorMsg2.classList.remove("hidden");
      errorMsg1.classList.add("hidden");
    } else if (numberOfPeople) {
      errorMsg1.classList.remove("hidden");
      errorMsg2.classList.add("hidden");
    } else {
      errorMsg1.classList.remove("hidden");
      errorMsg2.classList.remove("hidden");
    }
  }

  customValue.addEventListener("keydown", function (evt) {

    if (evt.key === "Enter" || evt.key == "ArrowRight") {

      const customValue = parseFloat(document.querySelector("#custom").value);

      for (let i = 0; i < tipButtons.length; i++) {
        tipButtons[i].classList.remove("active");

      }

      if (customValue) {

        tipCalculator(customValue);


      }
      else {

        swal("Error", "enter a valid number!", "error");

      }
    }
  });
  tipButtons.forEach((tipButton) => {

    tipButton.addEventListener("click", function () {
      for (let i = 0; i < tipButtons.length; i++) {
        tipButtons[i].classList.remove("active");

      }

      this.classList.add("active")
      const tipPercentage = this.children[0].innerHTML;

      tipCalculator(tipPercentage);

    });
  });
})();
