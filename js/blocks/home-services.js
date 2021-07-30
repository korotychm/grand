$(document).on('click', '.home-services__accordion-item', function(){
  $('.home-services__accordion-item.active div').slideUp();
  $('.home-services__accordion-item').removeClass('active')
  $(this).addClass('active');
  $(this).find('div').slideDown();
  $('.home-services__img img').attr('src',$(this).data('img'));
});
