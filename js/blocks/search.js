$('.header__search .icon').click(function(e){
  if (!$('.header__search').hasClass('active')){
    e.preventDefault();
    $('.header__search').addClass('active');
    $('.header__search input').focus();
    $('.header').addClass('header--colored');
  }
});
$('.header__search-close').click(function(){
  $('.header__search').removeClass('active');
  $('.header').removeClass('header--colored');
});
$('.search__switcher .tags a').click(function(){
  $('.search__switcher .tags a').removeClass('active');
  $(this).addClass('active');
  $('.search__panel').removeClass('active');
  $('.search__panel').eq($(this).index()).addClass('active');
  if ($('.search__panel.active .interior__dots').length){
    $('.interior__dots').slick('resize');
  }
});
