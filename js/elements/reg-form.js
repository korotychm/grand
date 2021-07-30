$(document).on('focus', '.reg-form__input input', function(){
  $(this).parent().addClass('focused');
});
$(document).on('focusout', '.reg-form__input input', function(){
  $(this).parent().removeClass('focused');
  if (($(this).val()!='')&&($(this).val()!='+7 (___) ___-__-__')){
    $(this).parent().addClass('filled');
  } else {
    $(this).parent().removeClass('filled');
  }
});
$(".phoneinput").mask("+7 (999) 999-99-99");
