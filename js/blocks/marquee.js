if ($('.marquee').length){
  $('.marquee').slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    pauseOnHover: false
  });
}
