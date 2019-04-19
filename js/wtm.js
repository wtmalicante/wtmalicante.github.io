jQuery(function($) {
  "use strict";
	/* ----------------------------------------------------------- */
	/*  Event counter 
	/* -----------------------------------------------------------*/

	if ( $( '.countdown' ).length > 0 ) {
		$(".countdown").jCounter({
		  	date: '11 may 2019 00:00:00',
		  	fallback: function() { console.log("count finished!") }
		});
	}
});
