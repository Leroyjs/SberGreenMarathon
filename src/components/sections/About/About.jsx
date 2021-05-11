import React, { useEffect, useState } from 'react';
import './style.scss';

import { Button } from '../../UI/Button/Button.jsx';
import { Text } from '../../UI/Text/Text.jsx';
import { TitleH3 } from '../../UI/TitleH3/TitleH3.jsx';
import { TitleH2 } from '../../UI/TitleH2/TitleH2.jsx';
import { Counter } from '../../common/Counter/Counter';
import { config } from '../../../config.js';

import aboutImg from './aboutImg.png';

const axios = require('axios');

export const About = () => {
    const [date, setDate] = useState(false);
    useEffect(() => {
        getClosestEvent().then((result) => {
            const {
                event_day,
                event_hour,
                event_minute,
                event_second,
            } = result[0];
            setDate({
                event_day: +event_day,
                event_hour: +event_hour,
                event_minute: +event_minute,
                event_second: +event_second,
            });
        });
    }, []);
    return (
        <section className="about main-padding-horizontal">
            <div className="about__inner">
                <img src={aboutImg} alt="" className="about__img"></img>
                <TitleH2 addClasses={['about__title']}>О марафоне</TitleH2>
                <Text addClasses={['about__text']}>
                    5 июня, во Всемирный день защиты окружающей среды, Сбер
                    проведёт Зелёный Марафон. Проект реализуется при поддержке
                    Благотворительного фонда Сбербанка «Вклад в будущее» в 180
                    городах России. Количество городов-участников определено
                    неслучайно: в этом году Сбербанк празднует юбилей с момента
                    основания — 180 лет. Именно поэтому большинство активностей
                    так или иначе связано с этой датой и цифрой. Так, к примеру,
                    в ходе проекта запланирована высадка 180 000 деревьев,
                    забеги пройдут на территории 180 парков, ожидается, что
                    участие в Зелёном Марафоне примет 180 000 человек.
                </Text>
                <TitleH3 addClasses={['about__sub-title']}>
                    До следующего события осталось:
                </TitleH3>
                {date && (
                    <Counter
                        addClasses={['about__counter']}
                        initDate={date}
                    ></Counter>
                )}
                {/* <Button addClasses={['about__button']}>Принять участие</Button> */}
            </div>
        </section>
    );
};
async function getClosestEvent() {
    return axios
        .get(config.domain + '/api/get_closest_event/', {
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
