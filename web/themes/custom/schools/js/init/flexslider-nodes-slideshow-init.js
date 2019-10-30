(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslFlexsliderNodesSlideshow = {
    attach: function (context, settings) {

      $(context).find('.nodes-slideshow').once('tpslFlexsliderNodesSlideshowShow').each(function() {
        $(this).fadeIn("slow");
      });

      $(context).find('.nodes-slideshow-navigation').once('tpslFlexsliderNodesSlideshowNavShow').each(function() {
        $(this).fadeIn("slow");
      });

      // The slider being synced must be initialized first
      $(context).find('.nodes-slideshow').once('tpslFlexsliderNodesSlideshowInit').each(function() {
        var blockId = $(this).closest(".block").attr('id'),
        nodesSlideshow = "#" + blockId + " .nodes-slideshow",
        nodesSlideshowThumbs = "#" + blockId + " .nodes-slideshow-navigation";

        $(nodesSlideshowThumbs).flexslider({
          animation: "slide",
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          directionNav: false,
          prevText: "",
          nextText: "",
          asNavFor: nodesSlideshow
        });
        $(nodesSlideshow).flexslider({
          useCSS: false,
          animation: "slide",
          controlNav: false,
          directionNav: false,
          prevText: "",
          nextText: "",
          animationLoop: false,
          slideshow: false,
          sync: nodesSlideshowThumbs
        });
      });

      $(context).find('.nodes-slideshow-navigation .slides').once('tpslFlexsliderNodesSlideshowSlidesTouch').on('touchstart', 'li', function() {
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
      });

      $(context).find('.nodes-slideshow-navigation .slides').once('tpslFlexsliderNodesSlideshowSlides').on('click', 'li', function() {
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
