$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: '<span class="campoErrado">Por favor, insira o seu nome.</span>',
      email: '<span class="campoErrado">Por favor, insira o seu email.</span>',
      mensagem:
        '<span class="campoErrado">Por favor, insira a sua mensagem.</span>',
    },
    submitHandler: function (form) {
      form.submit();
      alert("Formulário enviado com sucesso!");
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(
          `Existem ${camposIncorretos} campos incorretos. Por favor, verifique os campos e tente novamente.`
        );
      }
    },
  });
});
