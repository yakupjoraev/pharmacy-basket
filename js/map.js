var mapItems = [
    {
        id: '1',
        TITLE: 'Аптека 1',
        ADDRESS: 'Адрес 1',
        SCHEDULE: 'c 10 до 12',
        UF_METRO: 'Метро 1',
        UF_METRO_TIME: '5 минут от метро',
        X: 'задай какой нибудь значение из яндекс карт',
        Y: 'задай какой нибудь значение из яндекс карт',
    },
    {
        id: '2',
        TITLE: 'Аптека 2',
        ADDRESS: 'Адрес 2',
        SCHEDULE: 'c 10 до 12',
        UF_METRO: 'Метро 2',
        UF_METRO_TIME: 'c 10 до 12',
        X: 'задай какой нибудь значение из яндекс карт',
        Y: 'задай какой нибудь значение из яндекс карт',
    }
]
ymaps.ready(function(){
    var map = new ymaps.Map('map', {//строка 'map' это id блока в котором будет заиничена карта
        center: [/* тут координата х */,/* тут координата у */,], //Задаем центр карты
        zoom: 10,
        controls: ['zoomControl']
    });

    //Коллекции (создание)
    mapCollection = new ymaps.GeoObjectCollection(null, {});

    //Кластеризатор (иконка)
    clusterIcons = [{
        href: '/local/templates/.default/img/map_claster.svg',
        size: [40, 40],
        offset: [-20, -20]
    }];

    //Кластеризатор (Оболочка контейнера метки)
    var clusterContent = ymaps.templateLayoutFactory.createClass('<div class="buildings-map_marker">{{ properties.geoObjects.length }}</div>');

    //Кластеризатор (создание)
    var myClusterer = new ymaps.Clusterer({
        preset: 'islands#invertedVioletClusterIcons',
        zoomMargin: [30],
        geoObjectHideIconOnBalloonOpen: false,

        clusterIcons: clusterIcons,
        clusterIconContentLayout: clusterContent
    });

    //Метка (данные метки)
    getPointData = function(value)
    {
        var id = parseInt(value.ID),
            title = value.TITLE || '',
            titleChain = value.UF_PHARMACY_CHAIN || title,
            address = value.ADDRESS || '',
            schedule = value.SCHEDULE || '',
            metro = value.UF_METRO || '',
            metroTime = value.UF_METRO_TIME || '',
            hintContent = value.TITLE || '',
            arResult = {};

        arResult = {
            id: id,
            title: title,
            titleChain: titleChain,
            address: address,
            schedule: schedule,
            metro: metro,
            metroTime: metroTime,
            hintContent: hintContent
        };

        return arResult;
    };

    //Метка (опции метки)
    getPointOptions = function(value)
    {
        var mapIcon = '';
        if(value.UF_MAP_ICON)
            mapIcon = value.UF_MAP_ICON;

        var pointOptions = [],BalloonContentLayout;

        //Создание макета содержимого балуна.
        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon-content_header"><p class="pharma_name">{{properties.titleChain}}</p></div>' +
            '<div class="balloon-content_body">' +
            '<p class="address">{{properties.address}}</p>' +
            '<p class="station">' +
            '<span class="metro"></span> {{properties.metro}}' +
            ',<span class="people"></span> {{properties.metroTime}} ' +
            '</p>' +
            '<p class="schedule">{{properties.schedule}}</p>' +
            '</div>' +
            '<div class="balloon-content_footer">' +
            '<span class="button button--large button--6" data-map-id="{{properties.id}}">Выбрать эту</span>' +
            '</div>',
            {
                build: function() {
                    BalloonContentLayout.superclass.build.call(this);
                },

                clear: function() {
                    BalloonContentLayout.superclass.clear.call(this);
                },

            }
        );

        pointOptions = {
            iconLayout: 'default#image',
            iconImageHref: '/local/templates/.default/img/map_point.svg', //Пути к иконкам
            iconImageSize: [30, 39],
            iconImageOffset: [-13, -48],
            iconactive: '/local/templates/.default/img/map_point.svg', //Пути к иконкам

            balloonOffset: [0,-50],
            balloonContentLayout: BalloonContentLayout,
            balloonPanelMaxMapArea: 0
        };

        return pointOptions;
    };

    //Метка (добами точки на карту)
    if(typeof mapItems == 'object' && mapItems.length)
    {
        $.each(mapItems, function (key, value) {
            if (value.X && value.Y) {
                geoObjects[key] = new ymaps.Placemark([value.X, value.Y], getPointData(value), getPointOptions(value));
            }
        });
    }

    //Инициализация объектов на карте
    myClusterer.add(geoObjects);
    mapCollection.add( myClusterer );
    map.geoObjects.add(mapCollection);

    //Устанавливаем карте центр и масштаб так, чтобы охватить коллекцию целиком.
    map.setBounds(mapCollection.getBounds(),{checkZoomRange: true});

    //Добавив поиск на существующую карту
    var searchControl = new ymaps.control.SearchControl({
        options: {
            // Будет производиться поиск по топонимам и организациям.
            provider: 'yandex#map'
        }
    });
    map.controls.add(searchControl);
});