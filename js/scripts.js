

function scroll_to(clicked_link) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.Link1-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 500);
	}
}

jQuery(document).ready(function() {
	/*Navigation*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.Link1-content .row').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});



});

/*carousel-inner*/
$('.carousel').carousel({interval: 10000,pause:"hover",});

