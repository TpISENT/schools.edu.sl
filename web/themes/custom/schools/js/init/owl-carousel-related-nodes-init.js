(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslowlCarouselRelatedNodes = {
    attach: function (context, settings) {
      $(context).find('.tpsl-carousel-related-nodes').once('tpslowlCarouselRelatedNodesInit').each(function() {
        $(this).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:2,
            },
            480:{
              items:3,
            },
            768:{
              items:4,
            },
            992:{
              items:2,
            },
            1200:{
              items:3,
            },
            1680:{
              items:3,
            }
          },
          autoplay: drupalSettings.schools.owlCarouselRelatedNodesInit.owlRelatedNodesAutoPlay,
          autoplayTimeout: drupalSettings.schools.owlCarouselRelatedNodesInit.owlRelatedNodesEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
