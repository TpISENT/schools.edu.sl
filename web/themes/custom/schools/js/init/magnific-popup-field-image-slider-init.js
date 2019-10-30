(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslMagnificPopupFieldImageSlider = {
    attach: function (context, settings) {
      $(context).find('.in-page-images-slider li:not(.clone) .image-popup').once('tpslMagnificPopupFieldImageSliderInit').magnificPopup({
        type:"image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
          enabled: true, // set to true to enable gallery
        },
        image: {
          titleSrc: function(item) {
            return item.el.closest('.overlay-container').children()[1].title || '';
          }
        }
      });
      $(context).find('.one-value .image-popup').once('tpslMagnificPopupFieldImageInit').magnificPopup({
        type:"image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
          enabled: true, // set to true to enable gallery
        },
        image: {
          titleSrc: function(item) {
            return item.el.closest('.overlay-container').children()[1].title || '';
          }
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);