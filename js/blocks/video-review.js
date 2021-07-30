// Слайдер
if ($('.video-review__slider').length){
  // Считаем количество слайдов
  var countSlides = $('.video-review__slide').length;
  // Добавляем слайдам индексы
  var i = 0;
  $('.video-review__slide').each(function(){
    i++;
    $(this).attr('data-index',i);
  });
  // Запускаем слайдер
  function initVideoReviewSlider(){
    $('.video-review__slider .slick').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: "unslick"
        }
      ]
    });
  }
  initVideoReviewSlider();
  $(window).on('resize', function() {
   if ($(window).width() < 768) {
      initVideoReviewSlider();
    }
  });
  // Добавляем счетчик в DOM
  $('.video-review__slider').append('<div class="slick-counter"><span>1</span>/' + countSlides + '</div>');
  // Меняем счетчик после перелистывания
  $('.video-review__slider').on('afterChange', function(){
    var currentSlide = $('.video-review__slide.slick-current').data('index');
    $(this).find('.slick-counter span').text(currentSlide);
  });
}

$(document).on('click', '.video-review__button', function(){
  $(this).parent().fadeOut();
  $(this).parent().parent().find('video')[0].play();
});
