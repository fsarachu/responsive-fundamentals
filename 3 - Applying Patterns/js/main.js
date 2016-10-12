$(function () {

  /* Navigation control */

  $('#nav__toggle').on('click', function () {
    $('#main-nav').toggleClass('hidden');
  });


  /* Dotdotdot plugin configuration*/

  $(".snippet__text").dotdotdot({
    ellipsis: '... ',
    wrap: 'word',
    fallbackToLetter: true,
    after: null,
    watch: true,
    height: null,
    tolerance: 0,
    lastCharacter: {
      remove: [' ', ',', ';', '.', '!', '?'],
      noEllipsis: []
    }
  });

});
