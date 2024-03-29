(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtMainSlideshowBlock = {
    attach: function (context, settings) {

      $('.main-slideshow-block .rev_slider', context).once('mtMainSlideshowBlockInit').each(function() {
        $(this).show().revolution({
          sliderType:"standard",
          sliderLayout: $(this).closest(".main-slideshow-block").attr('data-attribute-tp-layout'),
          gridwidth: [1170,970,750,450],
          gridheight: parseInt($(this).closest(".main-slideshow-block").attr('data-attribute-tp-initial-height')),
          autoHeight: $(this).closest(".main-slideshow-block").attr('data-attribute-tp-autoheight'),
          fullScreenOffsetContainer: $(this).closest(".main-slideshow-block").attr('data-attribute-tp-ignore-header'),
          delay: $(this).closest(".main-slideshow-block").attr('data-attribute-tp-effect-duration'),
          disableProgressBar:'off',
          responsiveLevels:[1199,991,767,480],
          navigation: {
            onHoverStop:"off",
            arrows:{
              enable:true,
              tmp: "<div class='tp-title-wrap'><span class='tp-arr-titleholder'>{{title}}</span></div>",
              left:{
                h_align:"left",
                v_align:"center",
                h_offset:0,
                v_offset:0
              },
              right:{
                h_align:"right",
                v_align:"center",
                h_offset:0,
                v_offset:0
              }
            },
            tabs: {
              style:"",
              enable: $(this).closest(".main-slideshow-block").attr('data-attribute-tp-tabs-enable'),
              width:410,
              height:95,
              min_width:240,
              wrapper_padding: 0,
              wrapper_opacity:"1",
              tmp:'<div class="tp-tab-content"><span class="tp-tab-title">{{title}}</span></div>',
              visibleAmount: 6,
              hide_onmobile: false,
              hide_onleave: false,
              direction:"horizontal",
              span: true,
              position:"outer-bottom",
              space:0,
              h_align:"left",
              v_align:"bottom",
              h_offset:0,
              v_offset:0
            },
            bullets:{
              style:"",
              enable: $(this).closest(".main-slideshow-block").attr('data-attribute-tp-bullets-enable'),
              direction:"horizontal",
              space: 10,
              h_align: $(this).closest(".main-slideshow-block").attr('data-attribute-tp-bullets-position'),
              v_align:"bottom",
              h_offset: 0,
              v_offset: 20,
              tmp:"",
            },
            touch:{
              touchenabled: $(this).closest(".main-slideshow-block").attr('data-attribute-tp-touch-swipe-nav'),
              swipe_treshold:75,
              swipe_min_touches:1,
              drag_block_vertical:false,
              swipe_direction:"horizontal"
            }
          }
        });

        $(this).find(".ms-transparent-background").each(function() {
          var captionOpacity = $(this).attr('data-attribute-tp-caption-opacity'),
           captionBackgroundColor = $(this).css("background-color").replace(")", "," + captionOpacity + ")").replace("rgb", "rgba");
           $(this).css("background-color", captionBackgroundColor);
        });

        $(this).find(".transparent-background").css("backgroundColor", "rgba(0,0,0," + $(this).closest(".main-slideshow-block").attr('data-attribute-tp-background-opacity') + ")");
      });

    }
  };
})(jQuery, Drupal, drupalSettings);
