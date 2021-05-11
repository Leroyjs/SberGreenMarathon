import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import greenPlacemarkImg from './media/green.svg';

import { getMyCoordinatesOfCity } from '../../../citiesList';
import { connect } from 'react-redux';

let Map = ({ treesList, cityAccount }) => {
    useEffect(() => {
        window.ymaps.ready(init);
        function init() {
            // getMyCoordinates().then((result) => {
            const result = getMyCoordinatesOfCity(cityAccount);
            console.log(result, cityAccount);
            getNewMap(result, treesList);
            // });
        }
    }, []);

    return (
        <section className="map main-padding-horizontal">
            <div className="map__title-wrapper">
                <h2 className="h2">Карта высадки</h2>
                <Link
                    to="/events-map"
                    className="map__full-map map__full-map_desktop"
                >
                    Показать карту полностью
                </Link>
            </div>
            <div className="map-interactive__wrapper">
                <div className="map-interactive" id="map-interactive"></div>
            </div>
            <Link
                to="/events-map"
                className="map__full-map map__full-map_mobile"
            >
                Показать карту полностью
            </Link>
        </section>
    );

    function getNewMap(center = [56.8519, 60.6122], placemarkArray = []) {
        var myMap = new window.ymaps.Map('map-interactive', {
                center,
                zoom: 10,
            }),
            greenCollection = new window.ymaps.GeoObjectCollection(null, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: greenPlacemarkImg,
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38],
            }),
            greenCoords = placemarkArray;

        for (let i = 0, l = greenCoords.length; i < l; i++) {
            greenCollection.add(
                new window.ymaps.Placemark([
                    +greenCoords[i].latitude,
                    +greenCoords[i].longitude,
                ])
            );
        }

        myMap.geoObjects.add(greenCollection);

        // Через коллекции можно подписываться на события дочерних элементов.
        // greenCollection.events.add('click', function () {
        //     alert('Кликнули по зеленой метке');
        // });

        // Через коллекции можно задавать опции дочерним элементам.
        greenCollection.options.set('preset', 'islands#blueDotIcon');
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
    }
    async function getMyCoordinates() {
        const location = window.ymaps.geolocation.get();

        return location.then(
            (result) => {
                return result.geoObjects.position;
            },
            (err) => {
                console.log('Ошибка: ' + err);
            }
        );
    }
};
const mapStateToProps = (state) => {
    return {
        // token: state.account.token,
        cityAccount: state.account.city,
    };
};

Map = connect(mapStateToProps, null)(Map);

export { Map };
