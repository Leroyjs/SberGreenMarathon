import React, { useEffect, useState } from 'react';
import './style.scss';

import { TabList } from '../../common/TabList/TabList';

import greenPlacemarkImg from './media/green-sign.svg';
// import purpureSignImg from './media/purple-sign.svg';
// import orangeSignImg from './media/orange-sign.svg';

export const MyPlantedTrees = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [changeFunction, setChangeFunction] = useState(false);
    useEffect(() => {
        window.ymaps.ready(init);
        function init() {
            const mapFunction = createNewMap(tabArray[activeIndex].coords);
            setChangeFunction(() => mapFunction);
        }
    }, []);

    const handleNewActiveTab = (index) => {
        setActiveIndex(index);
        changeFunction(tabArray[index].coords);
    };
    return (
        <section className="my-planted-trees">
            <TabList tabArray={tabArray} handler={handleNewActiveTab} />
            <div className="my-planted-trees__map-wrapper main-padding-horizontal">
                <div className="my-planted-trees__map-inner">
                    <div
                        id="map-interactive"
                        className="my-planted-trees__map "
                    ></div>
                </div>
            </div>
        </section>
    );
    function createNewMap(initCoordinates = [55.76, 37.64]) {
        const myMap = new window.ymaps.Map('map-interactive', {
            center: initCoordinates,
            zoom: 12,
        });
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        let oldPlacemark = createAndGetPlacemark(myMap, initCoordinates);
        // myMap.events.add('click', (e) => {
        //     const coords = e.get('coords');
        //     myMap.geoObjects.remove(oldPlacemark);
        //     oldPlacemark = createAndGetPlacemark(myMap, coords);
        // });
        const setNewPlacemark = (coords) => {
            myMap.geoObjects.remove(oldPlacemark);
            oldPlacemark = createAndGetPlacemark(myMap, coords);
            myMap.setCenter(coords, 14);
        };

        return setNewPlacemark;
    }
    function createAndGetPlacemark(map, coordinates) {
        // Создаём макет содержимого.
        const placemark = new window.ymaps.Placemark(
            coordinates,
            {
                hintContent: 'Посаженные деревья',
                // balloonContent: 'Это красивая метка',
            },
            {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: greenPlacemarkImg,
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-15, -38],
            }
        );
        map.geoObjects.add(placemark);

        return placemark;
    }
};
const tabArray = [
    {
        date: '04.03.2020',
        time: '9:30',
        count: 10,
        coords: [59.59, 49.32],
    },
    {
        date: '03.03.2020',
        time: '9:30',
        count: 10,
        coords: [59.59, 12.32],
    },
    {
        date: '03.03.2020',
        time: '19:30',
        count: 10,
        coords: [59.53, 12.32],
    },
];
