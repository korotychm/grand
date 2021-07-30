// Слайдер
if ($('.about__slider .slick').length){
  $('.about__slider').each(function(){
    // Считаем количество слайдов
    var countSlides = $(this).find('img').length;
    // Добавляем слайдам индексы
    var i = 0;
    $(this).find('img').each(function(){
      i++;
      $(this).attr('data-index',i);
    });
    // Запускаем слайдер
    $(this).find('.slick').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true
    });
    // Добавляем счетчик в DOM
    $(this).find('.slick').append('<div class="slick-counter"><span>1</span>/' + countSlides + '</div>');
    // Меняем счетчик после перелистывания
    $(this).find('.slick').on('afterChange', function(){
      var currentSlide = $(this).find('.slick-current').data('index');
      $(this).find('.slick-counter span').text(currentSlide);
    });
  });
}
