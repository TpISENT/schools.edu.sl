(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslCountTo = {
    attach: function (context, settings) {
      $(context).find('[data-to]').once('tpslCountToInit').each(function() {
        var stat_item = $(this);
        var waypoints = stat_item.waypoint(function(direction) {
          var animatedObject = $(this.element);
            animatedObject.countTo();
            this.destroy();
          },{
            offset: "90%"
          });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
