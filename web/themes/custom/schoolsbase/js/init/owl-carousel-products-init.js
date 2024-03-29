(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselProducts = {
    attach: function (context, settings) {
      $(context).find('.tp-carousel-products').once('mtowlCarouselProductsInit').each(function() {
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
          autoplay: drupalSettings.schoolsbase.owlCarouselProductsInit.owlProductsAutoPlay,
          autoplayTimeout: drupalSettings.schoolsbase.owlCarouselProductsInit.owlProductsEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
