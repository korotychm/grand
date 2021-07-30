if ($('.blog-detail__carousel').length){
  $('.blog-detail__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
        }
      }
    ]
  });
}
