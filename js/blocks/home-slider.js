if ($('.home-slider__slider').length){
  $('.home-slider__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000
  });
  $('.home-slider .slick-dots li').each(function(dot=0){
    dot++;
    $(this).append('<span class="text2">0'+dot+'</span>');
  });
}
