import React, { useEffect, useState } from 'react';
import './style.scss';

import { BreadCrumbs } from '../../common/BreadCrumbs/BreadCrumbs';
import { TitleH1 } from '../../UI/TitleH1/TitleH1';
import { LegendItem } from '../../common/LegendItem/LegendItem';

import greenSignImg from './media/green-sign.svg';
import purpureSignImg from './media/purple-sign.svg';
import orangeSignImg from './media/orange-sign.svg';

import greenPlacemarkImg from './media/green-sign.svg';

import { config } from '../../../config';

import { getMyCoordinatesOfCity } from '../../../citiesList';
import { connect } from 'react-redux';

const axios = require('axios');

let EventsMap = ({ cityAccount }) => {
    // const [treesList, setTreesList] = useState([]);
    useEffect(() => {
        window.ymaps.ready(init);
        function init() {
            getTrees().then((trees) => {
                // setTreesList(trees);
                // getMyCoordinates().then((result) => {
                const result = getMyCoordinatesOfCity(cityAccount);
                getNewMap(result, trees);
                // });
            });
        }
    }, []);
    return (
        <>
            <section className="events-map">
                <div className="events-map__bread-crumbs  main-padding-horizontal">
                    <BreadCrumbs list={breadCrumbsList} />
                </div>
                <TitleH1 addClasses={['main-padding-horizontal']}>
                    Карта высадки
                </TitleH1>
                <div id={'map-interactive'} className="events-map__main"></div>
                <div className="events-map__info main-padding-horizontal">
                    <div className="events-map__info-item">
                        <LegendItem
                            img={greenSignImg}
                            text="Посаженое дерево"
                        />
                    </div>
                    {/* <div className="events-map__info-item">
                        <LegendItem img={purpureSignImg} text="Арт-объект" />
                    </div>
                    <div className="events-map__info-item">
                        <LegendItem img={orangeSignImg} text="Забыл..." />
                    </div> */}
                </div>
            </section>
        </>
    );

    function getNewMap(center = [55.76, 37.64], placemarkArray = []) {
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
    async function getTrees() {
        return axios
            .get(config.domain + '/api/get_tree_events/', {
                headers: {
                    Authorization: 'gm',
                },
            })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return [];
            });
    }
};

const breadCrumbsList = [
    {
        title: 'Главная',
        link: '/',
    },
    {
        title: 'Карта активности',
    },
];
const mapStateToProps = (state) => {
    return {
        // token: state.account.token,
        cityAccount: state.account.city,
    };
};

EventsMap = connect(mapStateToProps, null)(EventsMap);

export { EventsMap };
