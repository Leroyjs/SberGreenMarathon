import React, { useEffect, useState } from 'react';
import './style.scss';

import { BreadCrumbs } from '../../common/BreadCrumbs/BreadCrumbs';
import { TitleH1 } from '../../UI/TitleH1/TitleH1';
import { Text } from '../../UI/Text/Text';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';
import { InputFile } from '../../UI/InputFile/InputFile';

import img from './Frame.svg';

import { connect } from 'react-redux';
import { setStateOfPopUps } from '../../../redux/actions';

import { config } from '../../../config';
import { getMyCoordinatesOfCity } from '../../../citiesList';

const axios = require('axios');

const maxNumberOfTrees = 100000;

let PlantedTreeMain = ({ token, setStateOfPopUps, cityAccount }) => {
    const [city, setCity] = useState('');
    const [adress, setAdress] = useState('');
    const [numberOfTrees, setNumberOfTrees] = useState(1);
    const [userCoordinates, setUserCoordinates] = useState([0, 0]);
    const [imgs, setImgs] = useState([]);
    const [imgsError, setImgsError] = useState(false);

    useEffect(() => {
        window.ymaps.ready(init);
        function init() {
            // getMyCoordinates().then((result) => {
            const result = getMyCoordinatesOfCity(cityAccount);
            getNewMap(result);
            setUserCoordinates(result);
            getAdress(result).then((adress) => {
                setCity(adress.city);
                setAdress(adress.adress);
            });
            // });
        }
    }, []);
    const handleImg = (value) => {
        setImgs(value);
        if (value.length !== 0) {
            setImgsError(false);
        }
    };
    const handleNumberOfTrees = (value) => {
        if (+value < maxNumberOfTrees) {
            setNumberOfTrees(value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (imgs.length === 0) {
            setImgsError('Необходимо добавить минимум одну фотографию');
        } else {
            const fullToken = token ? 'gm ' + token : 'gm';
            const options = {
                headers: {
                    Authorization: fullToken,
                },
            };
            axios
                .post(
                    config.domain + '/api/create_tree_event',
                    {
                        count: numberOfTrees,
                        latitude: userCoordinates[0],
                        longitude: userCoordinates[1],
                        images: imgs,
                    },
                    options
                )
                .then(
                    (response) => {
                        setStateOfPopUps({
                            city: false,
                            logIn: false,
                            info: true,
                        });
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    };
    return (
        <>
            <section className="planted-tree-main">
                <div className="planted-tree-main__bread-crumbs  main-padding-horizontal">
                    <BreadCrumbs list={breadCrumbsList} />
                </div>
                <TitleH1 addClasses={['main-padding-horizontal']}>
                    Я посадил дерево
                </TitleH1>
                <div className="planted-tree-main__text  main-padding-horizontal">
                    <Text>
                        Укажите место на карте, где Вы высадили деревья <br />
                        Мы запомним и учтем в статистике
                    </Text>
                </div>
                <div id="events-map" className="planted-tree-main__map"></div>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="planted-tree-main__inputs main-padding-horizontal"
                >
                    <div className="planted-tree-main__inputs-row">
                        {/* <div className="planted-tree-main__input-wrapper">
                            <Input
                                title="Ваш город"
                                placeholder="Выберите Ваш город"
                                externalValue={city || 'Где-то в поле...'}
                                handler={setCity}
                            />
                        </div>
                        <div className="planted-tree-main__input-wrapper">
                            <Input
                                title="Адрес"
                                placeholder="Введите адрес"
                                handler={setAdress}
                                externalValue={adress || 'Где-то в поле...'}
                            />
                        </div> */}
                        <div className="planted-tree-main__input-wrapper">
                            <Input
                                numberMax={maxNumberOfTrees}
                                type="number"
                                title="Количество деревьев"
                                placeholder="Введите колличество деревьев"
                                // initialValue={numberOfTrees}
                                externalValue={numberOfTrees}
                                handler={handleNumberOfTrees}
                            />
                        </div>
                    </div>
                    <div className="planted-tree-main__photo">
                        <InputFile handler={handleImg} error={imgsError} />
                    </div>
                    <Button>Опубликовать</Button>
                </form>
            </section>
        </>
    );

    function getNewMap(initCoordinates = [55.76, 37.64]) {
        const myMap = new window.ymaps.Map('events-map', {
            center: initCoordinates,
            zoom: 10,
        });
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        let oldPlacemark = createAndGetPlacemark(myMap, initCoordinates);
        myMap.events.add('click', (e) => {
            const coords = e.get('coords');
            myMap.geoObjects.remove(oldPlacemark);
            oldPlacemark = createAndGetPlacemark(myMap, coords);
            setUserCoordinates(coords);
            getAdress(coords).then((adress) => {
                setCity(adress.city);
                setAdress(adress.adress);
            });
        });

        return myMap;
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
                iconImageHref: img,
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
    async function getAdress(coordinates = [55.76, 37.64]) {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Token b9d8b2bf6a6179e11be997de9bfae9eec4991f1f',
            },
        };

        return axios
            .post(
                'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address',
                {
                    lat: coordinates[0],
                    lon: coordinates[1],
                    radius_meters: 1000,
                },
                options
            )
            .then(
                (response) => {
                    if (response.data.suggestions.length) {
                        const data = response.data.suggestions[0].data;
                        const adress = {
                            city: data.city,
                            adress:
                                data.house &&
                                data.street_with_type + ', ' + data.house,
                        };
                        //     response.data.suggestions[0].value.split(
                        //     ','
                        // );
                        return adress;
                    } else {
                        return { city: '', adress: '' };
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    }
};

const breadCrumbsList = [
    {
        title: 'Главная',
        link: '/',
    },
    {
        title: 'Я посадил дерево',
    },
];

const mapStateToProps = (state) => {
    return {
        token: state.account.token,
        cityAccount: state.account.city,
    };
};

PlantedTreeMain = connect(mapStateToProps, { setStateOfPopUps })(
    PlantedTreeMain
);

export { PlantedTreeMain };
