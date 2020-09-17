$( () => {

  FastClick.attach(document.body);

  $('#nav-dropdown-btn').click( () => {
    $('.header').toggleClass('nav-open').toggleClass('nav-closed');
    $('#nav-dropdown-btn').toggleClass('flipped');
  });

});
