$(document).ready(function() {
   $('.hero-burger').click(function(event) {
      $('.hero-burger, .menu-list, .lang').toggleClass('active');
      $('body').toggleClass('lock')
   });
});