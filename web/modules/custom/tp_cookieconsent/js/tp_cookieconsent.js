/*
 * MTCookieConsent scripts
 *  Add any module related script here
 */

(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.tp_cookieconsent = {
    attach: function (context, settings) {
      // can access setting from 'drupalSettings';
      var theme_select = drupalSettings.tp_cookieconsent.theme_select;
      var alert_message = drupalSettings.tp_cookieconsent.alert_message;
      var target_url = drupalSettings.tp_cookieconsent.target_url;

      window.addEventListener("load", function(){
        window.cookieconsent.initialise({
          "palette": {
            "popup": {
              "background": "#000"
            },
            "button": {
              "background": "#fff"
            }
          },
          "theme": theme_select,
          "content": {
            "message": alert_message,
            "href": target_url
          }
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
