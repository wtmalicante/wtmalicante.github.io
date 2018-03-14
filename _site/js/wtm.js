jQuery(function($) {
  "use strict";
	/* ----------------------------------------------------------- */
	/*  Event counter 
	/* -----------------------------------------------------------*/

	if ( $( '.countdown' ).length > 0 ) {
		$(".countdown").jCounter({
		  	date: '14 april 2018 00:00:00',
		  	fallback: function() { console.log("count finished!") }
		});
	}
});
