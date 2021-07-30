$('.item-detail__photos .controls div').click(function(){
  var img = $(this).find('img').attr('src');
  $('.item-detail__photos .large img').attr('src',img);
});

function itemDetailHeight() {
  var maxHeight = $('.item-detail__left').height();
  $('.item-detail__scroll').css('max-height',maxHeight);
}

$('.item-detail__reviews-trigger').click(function(){
  $(this).toggleClass('active');
  $('.item-detail__review').toggleClass('active');
});

$('.item-detail__reviews-stars .icon').mouseover(function(){
  var count = $(this).index() + 1;
  for ( var i = 0; i < count; i++ ) {
    $('.item-detail__reviews-stars .icon').eq(i).addClass('hover');
  }
});
$('.item-detail__reviews-stars .icon').click(function(){
  $('.item-detail__reviews-stars .icon').removeClass('active');
  var count = $(this).index() + 1;
  for ( var i = 0; i < count; i++ ) {
    $('.item-detail__reviews-stars .icon').eq(i).addClass('active');
  }
  $('.item-detail__reviews-stars input').val(count);
  console.log($('.item-detail__reviews-stars input').val());
});
$('.item-detail__reviews-stars .icon').mouseout(function(){
  $('.item-detail__reviews-stars .icon').removeClass('hover');
});

$('.item-detail__accordion input').change(function(){
  if ($(this).prop('checked')){
    $('.item-detail__accordion input').prop('checked',false);
    $(this).prop('checked',true);
  }
});

if ($('.item-detail').length){

  itemDetailHeight();
  $(window).resize(function(){
    itemDetailHeight();
  });

  $(document).ready(function() {
  	$(".fancybox").fancybox();
  });

}
