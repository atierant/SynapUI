/**
 * Nanodio plugin for jQuery
 *
 * @author    Charles-Edouard Coste <cc@synap.fr>
 * @copyright 2012 Synap System (http://synap.fr)
 * @license   http://www.gnu.org/licenses/agpl.html GNU Affero General Public License
 */

(function( $ ) {

  $.fn.nanodio = function() {

    // Check if the browser is implementing Web Audio API
    if (typeof Audio === 'undefined') return;

    // XML entities for play and stop unicode symbols
    playSymbol = '&#x25B6;';
    stopSymbol = '&#x25FE;';

    return this.each(function(){

      var anchor = $(this).wrap('<span class="nanodio" />');
      var audio  = new Audio(anchor.attr('href'));

      if(!audio.canPlayType(anchor.attr('type'))) return;

      anchor.after('<span class="state" />');

      var state = anchor.next();

      state.html(stopSymbol);

      audio.addEventListener('ended', function(){state.html(stopSymbol)});

      anchor.click(function(e) {
          if(audio.paused) {
              audio.play();
              state.html(playSymbol);
          } else {
              audio.pause();
              audio.currentTime=0;
              state.html(stopSymbol);
          }
          e.preventDefault();
      });

    });

  };

})( jQuery );
