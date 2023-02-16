// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
    });
  
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });
  }
  
  function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
    limparCadastro();
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
    limparCadastro();
  }
  
  function limparCadastro() {
      inputusername.value = '';
      inputEmail.value = '';
      inputIdade.value = '';
      inputSenha.value = '';
      inputConfirmarSenha.value = '';
      input.classList.remove("error");
      input.classList.remove("correct");
      // input.classList.add("correct");
      // input.classList.add("error");
  
  }
  
  
  // ---------- VALIDAÇÃO USERNAME ---------- //
  let usernameInput = document.getElementById("username");
  let usernameLabel = document.querySelector('label[for="username"]');
  let usernameHelper = document.getElementById("username-helper");
  
  togglePopup(usernameInput, usernameLabel)
  
  // Validar valor do input
  usernameInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.length < 3){
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
      estilizarInputIncorreto(usernameInput, usernameHelper)
      inputsCorretos.username = false;
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(usernameInput, usernameHelper);
      inputsCorretos.username = true;
    }
  })
  
  // ---------- VALIDAÇÃO EMAIL ---------- //
  let emailInput = document.getElementById("email");
  let emailLabel = document.querySelector('label[for="email"]');
  let emailHelper = document.getElementById("email-helper");
  
  togglePopup(emailInput, emailLabel)
  
  // Validar valor do input
  emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.includes("@") && valor.includes(".com")){
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(emailInput, emailHelper);
      inputsCorretos.email = true;
    } else {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      emailHelper.innerText = "Precisa inserir um email válido";
      estilizarInputIncorreto(emailInput, emailHelper);
      inputsCorretos.email = false;
    }
  })
  
  // ---------- VALIDAÇÃO TELEFONE ---------- //
  let telefoneInput = document.getElementById("telefone");
  let telefoneLabel = document.querySelector('label[for="telefone"]');
  let telefoneHelper = document.getElementById("telefone-helper");
  
  togglePopup(telefoneInput, telefoneLabel)
  
  
  
  
  // ---- Habilitar Envio de Formulário ---- //
  
  const submitButton = document.getElementById('submit');
  limparCadastro();
  const inputsCorretos = {
    username: true,
    email: true,
    telefone: true,
    mensagem: true
  }
  
  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
  
    const values = Object.values(inputsCorretos)
  
    const anyFalse = values.filter((value) => value === false)
  
    if(!anyFalse.length) {
      alert('Formulário enviado com sucesso!')
    } else {
      alert('Preencha todos os campos!')
    }
  })
  
  //
  
  function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }
  
  