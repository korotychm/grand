if ($('.compare__carousel').length){
  var slides = 4,
      slides_desktop = 4,
      slides_tablet = 3,
      slides_mobile = 2;

  function InitCompareCarousel(sd,st,sm){
    $('.compare__carousel').slick({
        infinite: false,
        slidesToShow: slides_mobile,
        slidesToScroll: slides_mobile,
        dots: false,
        arrows: true,
        mobileFirst: true,
        prevArrow: $('.compare__arrow--prev'),
        nextArrow: $('.compare__arrow--next'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: slides_tablet,
              slidesToScroll: slides_tablet
            }
          },
          {
            breakpoint: 1267,
            settings: {
              slidesToShow: slides_desktop,
              slidesToScroll: slides_desktop
            }
          }
        ]
    });
  }

  InitCompareCarousel();

  $('.compare__wrapper').css('min-height',$('.compare__wrapper').height());

  function moveCompare(){
    var count = 0;
    var width = 0;
    if ($('.compare__pinned .item').length){
      count = $('.compare__pinned .item').length;
      width = $('.compare__pinned .item').outerWidth();
    }
    var move = count * width;
    slides_desktop = slides - count;
    if (slides_desktop < 1){
      slides_desktop = 1;
    }
    slides_tablet = slides - count - 1;
    if (slides_tablet < 1){
      slides_tablet = 1;
    }
    slides_mobile = slides - count - 2;
    if (slides_mobile < 1){
      slides_mobile = 1;
    }
    $('.compare__wrapper').css('padding-left',move + 'px');
    $('.compare__carousel').slick('destroy');
    InitCompareCarousel();
  }

  var rtime;
  var timeout = false;
  var delta = 200;

  $(window).resize(function(){
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
  });

  function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        moveCompare();
        $('.compare__wrapper').css('min-height',$('.item').height());
    }
  }

  $(document).on( "click", ".compare__carousel .item__compare-icon--pin", function() {
    var item = $(this).parent().parent();
    var index = $(this).parent().parent().data('slick-index');
    item.removeClass('slick-slide');
    item.removeAttr('style');
    item.clone().appendTo('.compare__pinned');
    $('.compare__carousel').slick('slickRemove', index);
    moveCompare();
  });

  $(document).on( "click", ".compare__carousel .item__compare-icon--remove", function() {
    var index = $(this).parent().parent().data('slick-index');
    $('.compare__carousel').slick('slickRemove', index);
  });

  $(document).on( "click", ".compare__pinned .item__compare-icon--pin", function() {
    var item = $(this).parent().parent();
    var content = item.html();
    $('.compare__carousel').slick('slickAdd', '<div class="item">'+content+'</div>');
    item.remove();
    moveCompare();
  });

  $(document).on( "click", ".compare__pinned .item__compare-icon--remove", function() {
    var item = $(this).parent().parent();
    item.remove();
    moveCompare();
  });

}
