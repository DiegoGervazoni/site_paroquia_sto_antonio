const form = document.getElementById("contact-form"); //Pegando o formulário
const nome = document.getElementById("nome"); //Pegando o nome
let formValido = false; //Variável para validar o formulário

function validaNome(nomeCompleto) {
  //Função para validar o nome
  const nome = nomeCompleto.split(" ");
  return nome.length >= 2;
}

form.addEventListener("submit", function (e) {
  //Função para enviar o formulário
  e.preventDefault(); //Função para parar o envio do formulário

  const email = document.getElementById("email"); //Pegando o email
  const telefone = document.getElementById("tel"); //Pegando o telefone
  const mensagem = document.getElementById("message"); //Pegando a mensagem
  const mensagemSucesso = `Obrigado pela sua mensagem, ${nome.value}.`; //Pegando a mensagem de sucesso

  formValido = validaNome(nome.value); //Validando o formulário
  if (formValido) {
    const containerSucessoMensagem = document.querySelector("#sucess-message");
    containerSucessoMensagem.textContent = mensagemSucesso;
    containerSucessoMensagem.style.display = "block";

    nome.value = "";
    email.value = "";
    telefone.value = "";
    mensagem.value = "";
  } else {
    nomeBeneficiario.style.border = "1px solid red";
    document.querySelector(".error-message").style.display = "block";
  }
});

nome.addEventListener("keyup", function (e) {
  e.preventDefault();
  console.log(e.target.value);
  formValido = validaNome(e.target.value);

  if (!formValido) {
    nome.classList.add("error");
    document.querySelector(".error-message").style.display = "block";
  } else {
    nome.classList.remove("error");
    document.querySelector(".error-message").style.display = "none";
  }
});
