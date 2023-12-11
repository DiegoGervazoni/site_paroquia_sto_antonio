$(document).ready(function () {

  $("#carrosel-imagens").slick({
    //seleciona o elemento que vai ser o carrosel
    autoplay: true, //autoplay
  });

  $(".menu-hamburguer").click(function () {
    //quando clicar no menu hamburguer
    $("nav").slideToggle(); //abre e fecha o menu
  });

});
