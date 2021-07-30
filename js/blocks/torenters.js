$('.torenters__item .btn').click(function(){
  if ($(this).hasClass('active')){
    $('.torenters__item .btn').removeClass('active');
    $('.torenters__panel').removeClass('active');
  } else {
    $('.torenters__item .btn').removeClass('active');
    $('.torenters__panel').removeClass('active');
    $(this).addClass('active');
    var panel = $(this).parent().index();
    $('.torenters__panel').eq(panel).addClass('active');
  }
  if ($(window).width()<768){
    var aid = $('.torenters__panel.active');
    $('html,body').animate({scrollTop: ($(aid).offset().top - 120)},'slow');
  }
})
