jQuery(document).ready(function ($) {


  $.fn.tpsl_init = function () {
    let target = $('.tpsl-mobile-menu-widget tpsl-input');
    $.fn.tpsl_setDirtyness(target);
    $.fn.tpsl_toggle();
  };

  $.fn.tpsl_setDirtyness = function (target) {
    if (target.value && target.value.length > 0) {
      $('.tpsl-mobile-menu-widget').addClass('tpsl-input-dirty');
    } else {
      $('.tpsl-mobile-menu-widget').removeClass('tpsl-input-dirty');
    }
  }

  $.fn.tpsl_toggle = function () {
    if ($(window).scrollTop() != 0) {
      $('.tpsl-mobile-menu-widget').addClass('show');
    } else {
      $('.tpsl-mobile-menu-widget').removeClass('show');
    }
  }

  $.fn.tpsl_init();

  $('.tpsl-mobile-menu-widget .tpsl-menu-button').on('click',
    function () {
      $('.tpsl-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').addClass('tpsl-noscroll');
      $('.tpsl-mobile-menu-overlay .sf-accordion').addClass('sf-expanded').removeClass('sf-hidden');
    });

  $('.tpsl-mobile-menu-overlay').on('dblclick',
    function () {
      $('.tpsl-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('tpsl-noscroll');
    });

  $('.tpsl-mobile-menu-widget .tpsl-input').keyup(function (event) {

    $.fn.tpsl_setDirtyness(event.target);
  });

  $('.tpsl-mobile-menu-widget .tpsl-clear-icon').on('click',
    function () {
      $('.tpsl-mobile-menu-widget .tpsl-input').val('').keyup();
    });

  $('.tpsl-mobile-menu-overlay .tpsl-dismiss-button.tpsl-button').on('click',
    function () {
      $('.tpsl-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('tpsl-noscroll');
    });

  $(window).scroll(function () {
    $.fn.tpsl_toggle();
  });
});
