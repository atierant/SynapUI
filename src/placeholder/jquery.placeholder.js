/**
 * Placeholder plugin for jQuery
 *
 * @author    Charles-Edouard Coste <cc@synap.fr>
 * @copyright 2011 Synap System (http://synap.fr)
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 */
(function( $ ) {

  $.fn.placeholder = function(placeholder) {

    return this.each(function(){

        var hasChanged  = false;

        $(this).val(placeholder)
               .change(function(){hasChanged = true; })
               .focusin(function(){if(!hasChanged){$(this).val(''); }})
               .focusout(function(){if(!hasChanged || !$(this).val()){ $(this).val(placeholder); hasChanged = false; } });        
    });
  };
})( jQuery );
