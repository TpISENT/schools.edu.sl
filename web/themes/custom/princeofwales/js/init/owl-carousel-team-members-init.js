(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslowlCarouselTeamMembers = {
    attach: function (context, settings) {
      $(context).find('.tpsl-carousel-team-members').once('tpslowlCarouselTeamMembersInit').each(function() {
        $(this).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:1,
            },
            575:{
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
          autoplay: drupalSettings.princeofwales.owlCarouselTeamMembersInit.owlTeamMembersAutoPlay,
          autoplayTimeout: drupalSettings.princeofwales.owlCarouselTeamMembersInit.owlTeamMembersEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
