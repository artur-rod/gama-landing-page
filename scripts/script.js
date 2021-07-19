// Sending Name and Email to local storage 
const submitInput = document.getElementById("submitForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

submitInput.addEventListener("click", (e) => {
  e.preventDefault();

  if(nameInput.value == "" || emailInput.value == "") {
    confirm("Preencha os dados para finalizar o cadastro...")
  }
  else {
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("email", emailInput.value);
  }
});