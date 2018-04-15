/*jshint esversion: 6 */

window.addEventListener( 'DOMContentLoaded',  function () {
	
	let tabs = require( '../parts/tabs.js' ),
		slowScroll = require( '../parts/slowScroll.js' ),
		modal = require( '../parts/modal.js' ),
		slider = require( '../parts/slider.js' ),
		calc = require( '../parts/calc.js' ),
		timer = require( '../parts/timer.js' );

		tabs();
		slowScroll();
		modal();
		slider();
		calc();
		timer();
});