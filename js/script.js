$(document).ready(function() {
   $('.menu__burger').click(function(event) {
      $('.menu__burger, .menu, .lang').toggleClass('active');
      $('body').toggleClass('lock')
   });
});