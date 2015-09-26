	
	var journalpostlimit = false;

    $(window).ready(function(event) {

    	FastClick.attach(document.body);

    	$('img[data-retina-src]').retinaDisplay();

    	if ($(window).width() <= 900) {
	    	$("#site-navigation").swipe({
				swipeLeft:function(event, phase, direction, distance, duration, fingers) {
					$('body').removeClass('show-site-navigation');
					$('body').toggleClass('show-works-navigation');
				},
				swipeRight:function(event, phase, direction, distance, duration, fingers) {
					$('body').removeClass('show-works-navigation');
					$('body').toggleClass('show-site-navigation');
				}
	        });
	    	$("#works-navigation").swipe({
				swipeLeft:function(event, phase, direction, distance, duration, fingers) {
					$('body').removeClass('show-site-navigation');
					$('body').toggleClass('show-works-navigation');
				},
				swipeRight:function(event, phase, direction, distance, duration, fingers) {
					$('body').removeClass('show-works-navigation');
					$('body').toggleClass('show-site-navigation');
				}
	        });
    	}

    	$('.work-list-item .thumbnail').hover(
    		function(){
    			$(this).children('.colour').fadeIn('fast');
    		},
    		function(){
    			$(this).children('.colour').fadeOut('fast');    			
    		}
    	);

		$('#site-navigation-wrap .cross').click(function(event){
			$('body').removeClass('show-site-navigation');
		});

		$('#site-navigation,.toggle-site-navigation').click(function(event){
			event.preventDefault();
			$('body').removeClass('show-works-navigation');
			$('body').toggleClass('show-site-navigation');
		});

		$('#works-navigation,.toggle-works-navigation').click(function(event){
			event.preventDefault();
			$('body').removeClass('show-site-navigation');
			$('body').toggleClass('show-works-navigation');
		});

		$('#overlay').click(function(event){
			$('body').removeClass('show-site-navigation show-works-navigation');
		});

		$('#mobile-navigation-toggle a').click(function(event){
			event.preventDefault();
			$('body').removeClass('show-works-navigation');
			$('body').toggleClass('show-site-navigation');
		});

		var transition = function($newEl) {

			var $oldEl = this;

			$newEl.hide();

			$oldEl.fadeOut("fast", function() {
				$oldEl.replaceWith($newEl);
				$newEl.fadeIn("fast");
				$('body').removeClass('show-site-navigation');
				$('body').removeClass('show-works-navigation');
				if ($('#journal').length) {
					attachLazy();
				}
				$.scrollTo(0,'fast');
			});
			
	    }

		$('body').djax('.djaxable', ['#'], transition);
		
		$(window).bind('djaxLoad', function(e, params) {
			$('body').removeClass('show-site-navigation');
			$('body').removeClass('show-works-navigation');
		});		

		$('body').on('click', '#works-trigger .toggle-works-navigation', function(event) { 
			event.preventDefault();
			$('body').removeClass('show-site-navigation');
			$('body').addClass('show-works-navigation');
		});

		

	$(window).load(function(event) {
	});