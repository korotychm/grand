$(".school-program__left div").stick_in_parent({
  offset_top: 140
});
$('.school-program__switcher div').click(function(){
  $('.school-program__switcher div').toggleClass('active');
  $('.school-program__panel').toggleClass('active');
  $(document.body).trigger("sticky_kit:recalc");
})
$('.school-program .tags a').click(function(e){
  e.preventDefault();
  if ($(this).hasClass('anchor')){
    var index = $(this).index();
    $('html,body').animate({scrollTop: ($('.school-program__panel.active .school-program__day').eq(index).offset().top - 110)},'slow');
  } else {
    $('.school-program .tags a').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index()
    $('.school-program__day').removeClass('active');
    $('.school-program__panel').each(function(){
      $(this).find('.school-program__day').eq(index).addClass('active');
    });
    $(document.body).trigger("sticky_kit:recalc");
  }
});
$('.school-program__all').click(function(){
  if ($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).text('Смотреть всю программу');
    $('.school-program .tags a').removeClass('anchor');
    $('.school-program .tags a').eq(0).addClass('active');
    $('.school-program__day').removeClass('active');
    $('.school-program__panel').each(function(){
      $(this).find('.school-program__day').eq(0).addClass('active');
    });
  } else {
    $(this).addClass('active');
    $(this).text('Скрыть всю программу');
    $('.school-program .tags a').addClass('anchor');
    $('.school-program .tags a').removeClass('active');
    $('.school-program__day').addClass('active');
  }
  $(document.body).trigger("sticky_kit:recalc");
});
