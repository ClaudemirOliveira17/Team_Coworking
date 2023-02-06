const form = document.getElementById("form");
const idnome = document.getElementById("idnome");
const idemail = document.getElementById("idemail");
const idtelefone = document.getElementById("idtelefone");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const idnomeValue = idnome.value;
  const idemailValue = idemail.value;
  const idtelefoneValue = idetelefone.value;

  if (idnomeValue == null) {
    setErrorFor(idnome, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(idnome);
  }

  if (idemailValue == null) {
    setErrorFor(idemail, "O email é obrigatório.");
  } else if (!checkidemail(idemailValue)) {
    setErrorFor(idemail, "Por favor, insira um e-mail válido.");
  } else {
    setSuccessFor(idemail);
  }

  if (idtelefoneValue == null) {
    setErrorFor(idtelefone, "O telefone é obrigatório.");
  } else {
    setSuccessFor(idtelefone);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("Dados enviados com sucesso!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

