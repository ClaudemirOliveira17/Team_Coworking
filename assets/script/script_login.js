function togglePopup(input, label) {
 // Mostrar popup de campo obrigatório   
  input.addEventlistener("focus", () => {
    label.classList.add("required-popup");
  });
  // Ocultar popup de campo obrigatório
  input.addEventlistener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// --- VALIDAÇÃO EMAIL --- //

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// --- Validar valor do input --- //
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")) {
  // - Adicionar estilos dinâmicos se o valor estiver correto - //
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;
  } else {
  // - Adicionar estilos dinâmicos se o valor conter menos de 3 caracteres -//  
    emailHelper.innerText = "Favor inserir um email válido"; 
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false;
  }
})

// --- Validação de senha --- //
const senhaInput = document.getElementById('senha');
const senhaLabel = document.getElementById('label[for="senha"]');
const senhaHelper = document.getElementById('senha-helper');

senhaInput.addEventListener('blur', (e) => {
  const senhaValue = e.target.value
  
  if(senhaValue) {
    estilizarInputCorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = true;
  } else {
    estilizarInputIncorreto(senhaInput, senhaHelper);
    senhaHelper.innerText = 'A senha é obrigatória!'
    inputsCorretos.senha = false; 
  }
})

// --- Habilitar acesso --- //
const submitButton = document.getElementById('submit');
const inputsCorretos = {
  email: false,
  senha: false,
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault()

  const values = Object.values(inputsCorretos)
  const anyFalse = values.filter((value) => value === false)

  if(!anyFalse.length) {
    alert('xxx')
  } else {
    alert('Preencha todos os campos!')
  }
})