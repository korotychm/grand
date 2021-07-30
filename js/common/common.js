$(document).on('click', '.toggle-active', function(){
	$(this).toggleClass('active');
});
$(document).on('click', '.header__burger', function(){
	$('.aside').addClass('active');
});
$(document).on('click', '.aside__close', function(){
	$('.aside').removeClass('active');
});
$(document).on('click', '.toggle-category', function(){
	$(this).toggleClass('active');
});
$(document).on('click', '.aside-catalog__toggle', function(){
	$(this).toggleClass('active');
	$('.aside-catalog__categories').toggleClass('active');
});
$(".anchor").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: ($(aid).offset().top - 120)},'slow');
});
document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
$(window).scroll(function(){
	if ($(window).scrollTop() > 120){
		$('.header').addClass('sticky');
	} else {
		$('.header').removeClass('sticky');
	}
	document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
});
