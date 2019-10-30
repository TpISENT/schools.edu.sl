(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslMagnificPopupFieldVideo = {
    attach: function (context, settings) {
      $(context).find('.iframe-popup > a').once('tpslMagnificPopupFieldVideoInit').magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true, // set to true to enable gallery
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
