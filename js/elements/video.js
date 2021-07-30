$(document).on('click', '.video__btn', function(){
  $(this).parent().parent().fadeOut();
  $(this).parent().parent().parent().find('video')[0].play();
});
