$('.personal__nav a').click(function(){
  $('.personal__nav a').removeClass('active');
  $(this).addClass('active');
  $('.personal__panel').removeClass('active');
  $('.personal__panel').eq($(this).index()).addClass('active');
});

$('.messages__table .tr').click(function(){
  if ($(this).hasClass('active')){
    $('.messages__table .tr').removeClass('active');
  } else {
    $('.messages__table .tr').removeClass('active');
    $(this).addClass('active');
  }
})
