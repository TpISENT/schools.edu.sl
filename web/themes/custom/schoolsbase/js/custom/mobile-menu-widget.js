jQuery(document).ready(function ($) {
  

  $.fn.tp_init = function () {
    let target = $('.tp-mobile-menu-widget tp-input');
    $.fn.tp_setDirtyness(target);
    $.fn.tp_toggle();
  };

  $.fn.tp_setDirtyness = function (target) {
    if (target.value && target.value.length > 0) {
      $('.tp-mobile-menu-widget').addClass('tp-input-dirty');
    } else {
      $('.tp-mobile-menu-widget').removeClass('tp-input-dirty');
    }
  }

  $.fn.tp_toggle = function () {
    if ($(window).scrollTop() != 0) {
      $('.tp-mobile-menu-widget').addClass('show');
    } else {
      $('.tp-mobile-menu-widget').removeClass('show');
    }
  }

  $.fn.tp_init();

  $('.tp-mobile-menu-widget .tp-menu-button').on('click',
    function () {
      $('.tp-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').addClass('tp-noscroll');
      $('.tp-mobile-menu-overlay .sf-accordion').addClass('sf-expanded').removeClass('sf-hidden');
    });

  $('.tp-mobile-menu-overlay').on('dblclick',
    function () {
      $('.tp-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('tp-noscroll');
    });

  $('.tp-mobile-menu-widget .tp-input').keyup(function (event) {
    
    $.fn.tp_setDirtyness(event.target);
  });

  $('.tp-mobile-menu-widget .tp-clear-icon').on('click',
    function () {
      $('.tp-mobile-menu-widget .tp-input').val('').keyup();
    });

  $('.tp-mobile-menu-overlay .tp-dismiss-button.tp-button').on('click',
    function () {
      $('.tp-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('tp-noscroll');
    });

  $(window).scroll(function () {
    $.fn.tp_toggle();
  });
}); 