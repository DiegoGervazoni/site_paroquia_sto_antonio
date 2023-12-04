const form = document.getElementById("contact-form"); //Pegando o formulário

function validaNome(nomeCompleto) {
  //Função para validar o nome
  const nome = nomeCompleto.split(" ");
  return nome.length >= 3;
}

form.addEventListener("submit", function (e) {
  //Função para enviar o formulário
  e.preventDefault(); //Função para parar o envio do formulário

  let formValido = false; //Variável para validar o formulário

  const nome = document.getElementById("nome"); //Pegando o nome
  const email = document.getElementById("email"); //Pegando o email
  const mensagemSucesso = `Obrigado ${nome.value}, pela sua mensagem! Em breve entraremos em contato com você através do seu e-mail ${email.value}`; //Pegando a mensagem de sucesso

  formValido = validaNome(nome.value); //Validando o formulário

  if (formValido) {
    //Validando o nome
    alert(mensagemSucesso);
    nome.value = " ";
    email.value = " ";
  } else {
    //Se o nome for inválido
    alert("Por favor, informe seu nome completo");
  }
});
