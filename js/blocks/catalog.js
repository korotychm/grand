$('.catalog .aside-catalog__toggle, .catalog .aside-catalog__categories').addClass('active');

$('.filter__triggers a').click(function(){
  if ($(this).hasClass('active')){
    $('.filter__triggers a').removeClass('active');
    $('.filter__panel').removeClass('active');
  } else {
    $('.filter__triggers a').removeClass('active');
    $(this).addClass('active');
    $('.filter__panel').removeClass('active');
    $('.filter__panel').eq($(this).index()).addClass('active');
  }
});

$('.catalog__grid-switcher a').click(function(){
  $('.catalog__grid-switcher a').toggleClass('active');
  $('.catalog__grid').toggleClass('catalog__grid--2');
  $('.shops__list').toggleClass('shops__list--list');
});

var sliders = document.getElementsByClassName('filter__range-slider');
var minVal,
    maxVal;
for ( var i = 0; i < sliders.length; i++ ) {
    $('.filter__range-inputs').eq(i).find('input').attr('data-index',i);
    minVal = parseInt($('.filter__range').eq(i).find('.filter__range-from').val());
    maxVal = parseInt($('.filter__range').eq(i).find('.filter__range-to').val());
    noUiSlider.create(sliders[i], {
        start: [minVal, maxVal],
        step: 5,
        connect: true,
        orientation: "horizontal",
        range: {
            'min': minVal,
            'max': maxVal
        },
    });
    sliders[i].noUiSlider.on('slide', changeInputs);
}

function changeInputs(i){
  for (var i = 0; i < sliders.length; i++) {
    $('.filter__range').eq(i).find('.filter__range-from').val(parseInt(sliders[i].noUiSlider.get()[0]));
    $('.filter__range').eq(i).find('.filter__range-to').val(parseInt(sliders[i].noUiSlider.get()[1]));
  }
}

$('.filter__range-from').change(function(){
  var i = $(this).data('index');
  var val = parseInt($(this).val());
  var max = parseInt($(this).parent().parent().find('.filter__range-to').val());
  if (val > max) {
    $(this).val(max);
  } else {
    sliders[i].noUiSlider.set([val, null]);
  }
});

$('.filter__range-to').change(function(){
  var i = $(this).data('index');
  var val = parseInt($(this).val());
  var min = parseInt($(this).parent().parent().find('.filter__range-from').val());
  if (val < min) {
    $(this).val(min);
  } else {
    sliders[i].noUiSlider.set([null, val]);
  }
});

$('.filter__select').click(function(){
  if ($(this).hasClass('active')){
    $('.filter__select').removeClass('active');
  } else {
    $('.filter__select').removeClass('active');
    $(this).addClass('active');
  }
});
