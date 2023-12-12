$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");

  $(".menu-hamburguer").click(function () {
    //quando clicar no menu hamburguer
    $("nav").slideToggle(); //abre e fecha o menu
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      message: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      nome: '<span class="campoErrado">Por favor, insira o seu nome.</span>',
      email: '<span class="campoErrado">Por favor, insira o seu email.</span>',
      telefone:
        '<span class="campoErrado">Por favor, insira o seu telefone.</span>',
      message:
        '<span class="campoErrado">Por favor, insira a sua mensagem.</span>',
    },
    submitHandler: function (form) {
      form.submit();
      alert("Mensagem enviada com sucesso!");
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
