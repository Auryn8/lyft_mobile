 $(document).ready(function() {
 /* Vista Splash
   setTimeout(function() {
    window.location.href = 'index02.html';
  }, 5000);
})*/
   
   /*Función para redireccionar a vista Index03*/
  $("#sign-up").click(function () {
    window.location.replace = './index03.html'
  });
  /*Función para habilitar el boton cuando se introduzcan 10 dígitos
  $("#cel").keydown(function () {
    var phone = $(this).content();
    for (var i = 0; i < 1; i++) {
      if (phone.length == 10) {
        $("#bt-on").removeAttr("disabled")
      } 
    };
  });*/

   /*Redireccionar a vista Index04*/
  $("#btn-on").click(function () {
    window.location.replace = 'index04.html'
  });
   
  /*Redireccionar a vista Index05*/ 
  $("#btn-next").click(function () {
    window.location = 'index05.html'
  });
  
   /*Redireccionar a vista Index06*/
  $("#to-btn").click(function () {
    window.location = 'index06.html'

  });

});