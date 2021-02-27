(function($) {
  "use strict"; // Start of use strict

  // var userLang = navigator.language || navigator.userLanguage;
  // if(userLang.split('-')[0] === 'pt') {
  //   $('.lang-pt').removeClass('d-none');  
  // } else {
  //   $('.lang-en').removeClass('d-none');  
  // }
  // ####### Always english
  $('.lang-en').removeClass('d-none');  

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $('#form').submit(function(ev) {
    document.getElementById('loading').classList.remove('d-none');
    ev.preventDefault();
    $.post('https://us-central1-tiagoit.cloudfunctions.net/app/contact', {
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }).then(function(response) {
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      document.getElementById('message-success').classList.remove('d-none');
      document.getElementById('loading').classList.add('d-none');
    })
  });

})(jQuery); // End of use strict
