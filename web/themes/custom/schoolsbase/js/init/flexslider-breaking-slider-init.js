(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtflexsliderBreakingSlider = {
    attach: function (context, settings) {
      $(context).find('.view-tp-breaking-slider .flexslider').once('mtflexsliderBreakingSliderInit').each(function() {
        $(this).flexslider({
          animation: drupalSettings.schoolsbase.flexsliderBreakingSliderInit.breakingEffect,        // Select your animation type, "fade" or "slide"
          slideshowSpeed: drupalSettings.schoolsbase.flexsliderBreakingSliderInit.breakingEffectTime,   // Set the speed of the slideshow cycling, in milliseconds
          prevText: "",
          nextText: "",
          pauseOnAction: true,
          useCSS: false,
          controlNav: false,
          pausePlay: true,
          directionNav: true
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
