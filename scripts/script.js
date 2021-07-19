// Sending Name and Email to local storage 
const submitInput = document.getElementById("submitForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

submitInput.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("email", emailInput.value);
});

