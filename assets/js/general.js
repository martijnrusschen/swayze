/**
 * Main JS file for Swayze behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

	$(document).ready(function(){

		if ( $( '.single-header' ).length ) {

			$( 'body' ).on( 'mousewheel', function() {
		        if ( $( document ).scrollTop() >= 300 )  {
		        	$( '.single-header' ).removeClass( 'show' );
		        	$( '.single-header' ).addClass( 'hide' );
		        } // End If Statement
		        if ( ( $( document ).scrollTop() < 300 ) && ( $( document ).scrollTop() > 0 ) && ( $( '.single-header' ).hasClass( 'hide' ) ) )  {
		        	$( '.single-header' ).removeClass( 'hide' );
		        	$( '.single-header' ).addClass( 'show' );
		        } // End If Statement
		    });

		} // End If Statement

	});

}(jQuery));