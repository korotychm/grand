$('.contact__switcher .btn').click(function(){
  $('.contact__switcher .btn').toggleClass('active');
  $('.contact__content').toggleClass('active');
});

if ($('.contact__map').length){
  $.getScript("https://api-maps.yandex.ru/2.1/?apikey=b9ea8d2f-c671-48cd-914f-2928873a7a63&lang=ru_RU", function() {
    ymaps.ready(init);
    function init() {
          var myMap = new ymaps.Map("map", {
                center: address,
                zoom: 14,
                controls: [],
                suppressMapOpenBlock: false,
                suppressObsoleteBrowserNotifier: false
            });
          var myPlacemark = new ymaps.Placemark(address, {}, {
                  // Опции.
                  // Необходимо указать данный тип макета.
                  iconLayout: 'default#image',
                  // Своё изображение иконки метки.
                  iconImageHref: ''
              });
          myMap.behaviors.disable('scrollZoom');
          myMap.geoObjects.add(myPlacemark);
          myMap.controls.add('zoomControl', {
              float: 'none',
              position: {
                  left: 30,
                  top: 300
             }
          });
          myMap.controls.add('routePanelControl', {
              float: 'none',
              position: {
                  left: 0,
                  top: 30
             }
          });
          var control = myMap.controls.get('routePanelControl');
          // Зададим состояние панели для построения машрутов.
          control.routePanel.state.set({
              // Тип маршрутизации.
              type: 'masstransit',
              // Выключим возможность задавать пункт отправления в поле ввода.
              fromEnabled: true,
              // Адрес или координаты пункта отправления.
              //from: '',
              // Включим возможность задавать пункт назначения в поле ввода.
              toEnabled: false,
              // Адрес или координаты пункта назначения.
              to: address
          });
          // Зададим опции панели для построения машрутов.
          control.routePanel.options.set({
              // Включим определение адреса по координатам клика.
              // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
              reverseGeocoding: true,
              // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
              types: { auto: true, masstransit: true, pedestrian: true, taxi: true }
          });
    }
  });
}

$('.btn--route').click(function(){
  $('.contact__map').addClass('route');
  $('.ymaps-2-1-77-route-panel-types__type_'+$(this).data('type')).trigger('click');
});
