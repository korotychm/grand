// Слайдер
if ($('.home-interior__slider').length){
  // Считаем количество слайдов
  var countSlides = $('.interior__item').length;
  // Добавляем слайдам индексы
  var i = 0;
  $('.interior__item').each(function(){
    i++;
    $(this).attr('data-index',i);
  });
  // Запускаем слайдер
  $('.home-interior__slider .slick').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    draggable: false,
    swipe: false
  });
  // Добавляем счетчик в DOM
  $('.home-interior__slider').append('<div class="slick-counter"><span>1</span>/' + countSlides + '</div>');
  // Меняем счетчик после перелистывания
  $('.home-interior__slider').on('afterChange', function(){
    var currentSlide = $('.interior__item.slick-current').data('index');
    $(this).find('.slick-counter span').text(currentSlide);
  });

}

$('.interior__dot').click(function(){
  if (($(window).width()>767)&&($(window).width()<1268)){
    if (!$(this).hasClass('active')){
      $(this).addClass('active');
    }
  }
});

$(document).click( function(e){
    if ( $(e.target).closest('.interior__dot').length ) {
      return;
    }
    $('.interior__dot.active').removeClass('active');
});

$(document).on('click','.item__close', function(){
  $(this).parent().parent().removeClass('active');
});

$('.interior__dot').each(function(){
  $(this).find('.item').append('<div class="item__close"></div>');
});

$(window).scroll(function(){
  if (($(window).width()<768)||($(window).width()>1267)){
    $('.interior__dot').removeClass('active');
  }
});
if ($('.interior__dots').length){
  // Запускаем карусель товаров только на мобильных
  function initDotsSlider(){
    $('.interior__dots').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick"
        }
      ]
    });
  }
  initDotsSlider();
  $(window).on('resize', function() {
   if ($(window).width() < 768) {
      initDotsSlider();
    }
  });
}

// Рассчитываем положение каждого popup
$('.interior__dot').each(function(){
    var half_size = $(this).width() / 2;
    var left_pos = ($(this).position().left + half_size) / $(this).parent().parent().width() * 100;
      if (left_pos > 50) {
        $(this).addClass('popup-left');
      } else {
        $(this).addClass('popup-right');
      }
    var top_pos = ($(this).position().top + half_size) / $(this).parent().parent().height() * 100;
      if (top_pos > 50) {
        $(this).addClass('popup-top');
      } else {
        $(this).addClass('popup-bottom');
      }
});
