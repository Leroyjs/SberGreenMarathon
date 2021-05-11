import React from 'react';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { Footer } from '../../components/sections/Footer/Footer.jsx';
import { OfferSlider } from '../../components/sections/OfferSlider/OfferSlider.jsx';
import { BreadCrumbs } from '../../components/common/BreadCrumbs/BreadCrumbs';
import { TitleH1 } from '../../components/UI/TitleH1/TitleH1';
import { TitleH3 } from '../../components/UI/TitleH3/TitleH3';
import { Date } from '../../components/common/Date/Date';
import { Text } from '../../components/UI/Text/Text';

import locationImg from './media/location.svg';
import eventMapImg from './media/event-map.png';
import activityMapImg from './media/activity-map.png';
import raceCardImg from './media/race-card.png';

export const AboutPage = () => {
    return (
        <>
            <Header />
            <main className="main about-page">
                <div className="main-padding-horizontal about-page__bread-crumbs-wrapper">
                    <BreadCrumbs list={breadCrumbsList} />
                </div>
                <TitleH1 addClasses={['main-padding-horizontal']}>
                    О марафоне
                </TitleH1>
                <OfferSlider />
                {/* <div className="about-page__date-location-wrapper main-padding-horizontal">
                    <div className="about-page__date-wrapper">
                        <Date date="5 июня" time="08:00" />
                    </div>
                    <div className="about-page__location">
                        <img src={locationImg} alt="" className="" />
                        <span className="about-page__location-text">
                            Екатеринбург, ул.Мичурина, 230. Центральный парк
                            культуры и отдыха им. В.Маяковского.
                        </span>
                    </div>
                </div> */}
                <section className="main-padding-horizontal about-page__section about-page__desc">
                    <TitleH3 addClasses={['about-page__title']}>
                        Зеленый Марафон в Уральском банке
                    </TitleH3>
                    <Text>
                        В Уральском банке забеги планируются в 6 городах:
                        Екатеринбург, Уфа, Челябинск, Тюмень, Сургут и Курган.
                        Зарегистрироваться на забег можно как на сайте
                        мероприятия{' '}
                        <a href="https://greenmarathon.ru/" target="_blank">
                            https://greenmarathon.ru/
                        </a>
                        , так и непосредственно на площадке. Принять участие в
                        основном забеге на 4,2 километра может любой желающий в
                        возрасте от 14 лет. Для более юных организуют отдельные
                        старты – дистанция для детей от 7 до 9 лет и для детей
                        от 10 до 13 лет.
                    </Text>
                </section>
                <section className="main-padding-horizontal about-page__section">
                    <TitleH3 addClasses={['about-page__title']}>
                        Ждем вас 5 июня по адресам:
                    </TitleH3>
                    <Text>
                        <b>Екатеринбург</b> — Екатеринбургский центральный парк
                        культуры и отдыха им. В. В. Маяковского — ул. Мичурина,
                        230
                        <br />
                        <b>Челябинск</b> — Центральный парк культуры и отдыха
                        им. Ю. А. Гагарина, ул. Коммуны, 100, строение 6 <br />
                        <b>Уфа</b> — Лайфстайл Центр Башкирия — пр. Менделеева,
                        205 А
                        <br />
                        <b>Курган</b> — Центральный парк культуры и отдыха — ул.
                        Гоголя, 1 <br />
                        <b>Тюмень</b> — Набережная реки Туры, Масловский взвоз
                        <br />
                        <b>Сургут</b> — Центральная городская площадь
                        ул.Университетская
                        <br />
                    </Text>
                </section>
                {/* <section className="main-padding-horizontal about-page__section">
                    <TitleH3 addClasses={['about-page__title']}>
                        Карта мероприятия
                    </TitleH3>
                    <img src={eventMapImg} alt="" className="about-page__img" />
                </section>
                <section className="main-padding-horizontal about-page__section">
                    <TitleH3 addClasses={['about-page__title']}>
                        Карта забега
                    </TitleH3>
                    <img src={raceCardImg} alt="" className="about-page__img" />
                </section>
                <section className="main-padding-horizontal about-page__section">
                    <TitleH3 addClasses={['about-page__title']}>
                        Карта активностей
                    </TitleH3>
                    <img
                        src={activityMapImg}
                        alt=""
                        className="about-page__img"
                    />
                </section>
                <section className="main-padding-horizontal about-page__section">
                    <TitleH3 addClasses={['about-page__title']}>Квест</TitleH3>
                    <Text>
                        5 июня, во Всемирный день защиты окружающей среды, Сбер
                        проведёт Зелёный Марафон. Проект реализуется при
                        поддержке Благотворительного фонда Сбербанка «Вклад в
                        будущее» в 180 городах России. Количество
                        городов-участников определено неслучайно: в этом году
                        Сбербанк празднует юбилей с момента основания — 180 лет.
                        Именно поэтому большинство активностей так или иначе
                        связано с этой датой и цифрой. Так, к примеру, в ходе
                        проекта запланирована высадка 180 000 деревьев, забеги
                        пройдут на территории 180 парков, ожидается, что участие
                        в Зелёном Марафоне примет 180 000 человек.
                    </Text>
                </section> */}
            </main>
            <Footer />
        </>
    );
};
const breadCrumbsList = [
    {
        title: 'Главня',
        link: '/',
    },
    {
        title: 'О марафоне',
        link: '/about',
    },
];