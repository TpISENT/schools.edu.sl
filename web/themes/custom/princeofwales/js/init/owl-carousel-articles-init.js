(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslOwlCarouselArticles = {
    attach: function (context, settings) {
      $(context).find('.tpsl-carousel-articles').once('tpslOwlCarouselArticlesInit').each(function() {
        $(this).owlCarousel({
          items: 2,
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
              items:2,
            },
            1680:{
              items:2,
            }
          },
          autoplay: drupalSettings.princeofwales.owlCarouselArticlesInit.owlArticlesAutoPlay,
          autoplayTimeout: drupalSettings.princeofwales.owlCarouselArticlesInit.owlArticlesEffectTime,
          nav: false,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
