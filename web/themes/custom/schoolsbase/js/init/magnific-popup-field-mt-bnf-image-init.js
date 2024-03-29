(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtMagnificPopupFieldBnfImage = {
    attach: function (context, settings) {
      $(context).find(".field--name-field-tp-bnf-image a.image-popup").once('mtMagnificPopupFieldBnfImageInit').magnificPopup({
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
