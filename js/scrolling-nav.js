$(function(){
	$('a[href*=#]:not([href=#])').click(function() {
	var target = $(this.hash);
	$('html,body').animate({
	scrollTop: target.offset().top }, 400 ); 
	return false;
	});
	});
