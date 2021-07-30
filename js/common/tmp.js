$('.item__icon').click(function(){
  $(this).toggleClass('active');
});

$('#subscribe-form').submit(function(e){
  e.preventDefault();
  $('.subscribe').fadeOut();
  $('.popup--subscribe-success').fadeIn();
});

$('#reg-form').submit(function(e){
  e.preventDefault();
  $('.popup--login .popup__close').trigger('click');
  $('.popup--reg-success').fadeIn();
});
