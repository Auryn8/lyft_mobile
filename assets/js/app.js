 /* Vista Splash*/ 
$(document).ready(function() {
  setTimeout(function() {
    window.location.href = '';
  }, 5000);
})
  /*Función para redireccionar*/
  $("#sign-up").click(function () {
    window.location = '../views/index03.html'
  });
  /*Función para habilitar el boton cuando se introduzcan 10 dígitos*/
  $("#tel").keydown(function () {
    var phone = $(this).val();
    for (var i = 0; i < 1; i++) {
      if (phone.length == 8) {
        $("#in-btn").removeAttr("disabled")
      } else {
        $("#in-btn").attr("disabled", "disabled")
      };
    };
  });

  $("#in-btn").click(function () {
    window.location = '../views/index04.html'
  });

  $("#next-btn").click(function () {
    window.location = '../views/index05.html'
  });
  
  $("#to-btn").click(function () {
    window.location = '../views/index06.html'

  });

});