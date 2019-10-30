(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslowlCarouselTestimonials = {
    attach: function (context, settings) {
      $(context).find('.tpsl-carousel-testimonials').once('tpslowlCarouselTestimonialsInit').each(function() {
        $(this).owlCarousel({
          items: 1,
          autoplay: drupalSettings.princeofwales.owlCarouselTestimonialsInit.owlTestimonialsAutoPlay,
          autoplayTimeout: drupalSettings.princeofwales.owlCarouselTestimonialsInit.owlTestimonialsEffectTime,
          nav: true,
          dots: false,
          loop: false,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
