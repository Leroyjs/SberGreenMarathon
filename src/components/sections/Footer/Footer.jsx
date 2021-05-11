import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import vkImg from './media/vk.svg';
import ytImg from './media/yt.svg';
import instagramImg from './media/instagram.svg';
import logoSberImg from './media/logo-sber.svg';

import { Desc } from '../../UI/Desc/Desc';

export const Footer = () => {
    return (
        <footer className="footer main-padding-horizontal">
            <div className="footer__gradient"></div>
            <div className="footer__column footer__column_1">
                <div className="">
                    <img
                        src={logoSberImg}
                        alt=""
                        className="main-logo footer__main-logo"
                    />
                </div>
                {/* <div className="social-links">
                    <a href="" className="social-links__item">
                        <img
                            src={vkImg}
                            alt=""
                            className="social-links__icon"
                        />
                    </a>
                    <a href="" className="social-links__item">
                        <img
                            src={instagramImg}
                            alt=""
                            className="social-links__icon"
                        />
                    </a>
                    <a href="" className="social-links__item">
                        <img
                            src={ytImg}
                            alt=""
                            className="social-links__icon"
                        />
                    </a>
                </div> */}
            </div>
            <div className="footer__column footer__column_2">
                <Desc addClasses={['footer__copyright']}>
                    © 1997—2021 ПАО СберБанк
                </Desc>
                <Desc addClasses={['footer__adress']}>
                    Россия, Москва, 117997, ул. Вавилова, 19. Генеральная
                    лицензия на осуществление банковских операций от 11 августа
                    2015 года. Регистрационный номер — 1481.
                </Desc>
                <Desc className={['footer__help']}>
                    Техподдержка:
                    <a
                        href="mailto:eko.marathon.service@gmail.com"
                        className=""
                    >
                        eko.marathon.service@gmail.com
                    </a>
                </Desc>
            </div>
            <div className="footer__column footer__column_3">
                <nav className="footer__nav">
                    <ul className="footer__ul">
                        <li className="footer__li">
                            <Link to="/" className="footer__link">
                                Главная
                            </Link>
                        </li>
                        <li className="footer__li">
                            <Link to="/about" className="footer__link">
                                О марафоне
                            </Link>
                        </li>
                        <li className="footer__li">
                            <Link to="/news/1" className="footer__link">
                                Новости
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer__column footer__column_4">
                <nav className="footer__nav">
                    <ul className="footer__ul">
                        {/* <li className="footer__li">
                            <Link href="" className="footer__link">
                                Календарь событий
                            </Link>
                        </li> */}
                        <li className="footer__li">
                            <Link to="/events-map" className="footer__link">
                                Карта высадки
                            </Link>
                        </li>
                        {/* <li className="footer__li">
                            <Link href="" className="footer__link">
                                Сдать на переаботку
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </footer>
    );
};
