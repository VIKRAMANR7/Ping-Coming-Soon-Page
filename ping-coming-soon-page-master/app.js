var emailInput = document.getElementById("email");

document.querySelector(".form-input").addEventListener("submit", function (e) {
  //prevent the normal submission of the form
  e.preventDefault();
  let regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
  if (regex.test(emailInput.value)) {
    emailInput.style.outline = "";
    document.getElementById("lbltxt").style.visibility = "hidden";
  } else {
    emailInput.style.outline = "1px solid hsl(354, 100%, 66%)";
    emailInput.style.marginBottom = "30px";
    document.getElementById("lbltxt").style.visibility = "visible";
  }
});
