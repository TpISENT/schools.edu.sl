(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslTypedjs = {
    attach: function (context, settings) {
      $(context).find('.typed').once('tpslTypedjsInit').each(function() {
        var typed = new Typed(this, {
          stringsElement: '.typed-strings',
          loop: true,
          typeSpeed: 30,
          backSpeed: 25,
          backDelay: 4000
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
