/*
 * agility.js
 * 
 * The main javascript for Agility - Responsive HTML5/CSS3 Template by SevenSpark
 * 
 * Copyright 2011 Chris Mavricos, SevenSpark
 * http://sevenspark.com
 * 
 */

jQuery(document).ready(function($){
	
	/* Style for JS-enabled */
	$('body').addClass('js-enabled');	
	
	/* Keep track of the width for use in mobile browser displays */
	var currentWindowWidth = $(window).width();
	$(window).resize(function(){
		currentWindowWidth = $(window).width();
	});
	
	/* FLEX SLIDER */
	var $flexSlider = $('.flexslider');
	$flexSlider.flexslider({
		animation: "slide",
		directionNav: true,
		controlNav: true,
		animationLoop: true,
		slideshow: true,
		slideshowSpeed: 7000,
		animationSpeed: 600,
		pauseOnAction: true,
		pauseOnHover: true,
		prevText: "&larr;",
		nextText: "&rarr;",
		controlsContainer: ".flex-container"
	});
	$('.height-expand').each(function(){
		$(this).height($(this).prev().height());
	});
	
	/* LIGHTBOX */
	// Lightbox2 initializes automatically, no setup needed
	
	/* Expander for featured images */
	$('.single-post-feature-expander').click(function(){
		$('.featured-image').toggleClass('full-width');
	});
	
	//Image Preloader for non-iOS devices
	var deviceAgent = navigator.userAgent.toLowerCase();    
	var is_iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
	
	if(!is_iOS){
		//iOS doesn't like CSS3 transitioning preloader, so don't use it
		$('.preload').preloadImages({
	        showSpeed: 200   // length of fade-in animation, should be .2 in CSS transition
	    });	   
		$('.video-container').addClass('video-flex');
	}
	
});

//Image Preloader
jQuery.fn.preloadImages = function(options){

    var defaults = {
        showSpeed: 200
    };

    var options = jQuery.extend(defaults, options);

	return this.each(function(){
		var $container = jQuery(this);
		var $image = $container.find('img');

		$image.addClass('loading');	//hide image while loading
         
		$image.bind('load error', function(){
			$image.removeClass('loading'); //allow image to display (will fade in with CSS3 trans)
			
			setTimeout(function(){ 
				$container.removeClass('preload'); //remove the preloading class to swap the bkg
			}, options.showSpeed);
			
		});
		
		if($image[0].complete) { 
			$image.trigger('load');
		}
    });
}