 $(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

window.sr = ScrollReveal();
sr.reveal('.exposure', { reset: true, delay: 300});
sr.reveal('.part', { reset: true, delay: 500},50);

sr.reveal('.exposure-school', { reset: true, delay: 500},50);
sr.reveal('.part-school', { reset: true, delay: 500},50);

sr.reveal('.exposure-experiance', { reset: true, delay: 500}, 50);
sr.reveal('.part-experiance', { reset: true, delay: 500}, 50);

sr.reveal('.exposure-skills', { reset: true, delay: 500}, 50);
sr.reveal('.part-skills', { reset: true, delay: 500}, 50);

sr.reveal('#portfolio .container', { reset: true, delay: 500}, 50);
sr.reveal('.project', { reset: true, delay: 500}, 50);