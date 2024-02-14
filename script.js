$(document).ready(function(){
 

  $('.valentines-day').click(function(){
      // AnimaciÃ³n de desvanecimiento de los elementos del sobre
      $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
      $('.envelope').fadeOut(800, function() {
          // Ocultar elementos dentro de .valentines-day
          $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

          // Hacer visible la carta con una animaciÃ³n ondulante
          $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
          $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
              var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la funciÃ³n seno
              $(this).css('transform', 'scale(' + scale + ')');
          }}); // AnimaciÃ³n de ondulaciÃ³n
      });
  });
});
