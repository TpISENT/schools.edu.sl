(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslowlCarouselCollections = {
    attach: function (context, settings) {
      $(context).find('.tpsl-carousel-collections').once('tpslowlCarouselCollectionsInit').each(function() {
        $(this).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:2,
            },
            480:{
              items:2,
            },
            768:{
              items:2,
            },
            992:{
              items:2,
            },
            1200:{
              items:4,
            },
            1680:{
              items:4,
            }
          },
          autoplay: drupalSettings.princeofwales.owlCarouselCollectionsInit.owlCollectionsAutoPlay,
          autoplayTimeout: drupalSettings.princeofwales.owlCarouselCollectionsInit.owlCollectionsEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
