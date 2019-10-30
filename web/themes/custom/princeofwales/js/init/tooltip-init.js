(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tpslToolTip = {
    attach: function (context, settings) {
      $(context).find('[data-toggle="tooltip"]').once('tpslToolTipInit').tooltip();
    }
  };
})(jQuery, Drupal, drupalSettings);
