(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslMagnificPopupMemberPhoto = {
    attach: function (context, settings) {
      $(context).find('.field--name-field-tpsl-tmm-member-photo a.image-popup').once('tpslMagnificPopupMemberPhotoInit').magnificPopup({
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
