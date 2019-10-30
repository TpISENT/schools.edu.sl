(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslowlCarouselAlbums = {
    attach: function (context, settings) {
      $(context).find('.tpsl-carousel-albums').once('tpslowlCarouselAlbumsInit').each(function() {
        $(this).owlCarousel({
          items: 1,
          responsive:{
            0:{
              items:1,
            },
            480:{
              items:1,
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
          autoplay: drupalSettings.princeofwales.owlCarouselAlbumsInit.owlAlbumsAutoPlay,
          autoplayTimeout: drupalSettings.princeofwales.owlCarouselAlbumsInit.owlAlbumsEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
