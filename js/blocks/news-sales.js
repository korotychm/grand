//Переключение в блоке Новости / Акции с новостей на акции и наоборот
$(document).on('click', '.news-sales__switcher span:not(.active)', function(){
  $('.news-sales__switcher span').toggleClass('active');
  var btn = $(this).data('btn');
  var href = $(this).data('href');
  $('.news-sales__switcher + .btn').text(btn);
  $('.news-sales__switcher + .btn').attr('href',href);
  $('.news-sales__content').toggleClass('active');
  $('.news-sales__content.active .news-carousel').slick('refresh');
});
