import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { Button } from '../../UI/Button/Button.jsx';
import { PersonalAreaIcon } from '../../common/PersonalAreaIcon/PersonalAreaIcon';
import { MenuBurger } from '../../common/MenuBurger/MenuBurger';
import { Burger } from '../../UI/Burger/Burger';
import { Location } from '../../UI/Location/Location';

import logoSber from './media/logo-sber.svg';
import logoGM from './media/logo-gm.svg';
import profileImg from './media/profile.svg';
import tree from './media/tree.svg';

import { connect } from 'react-redux';
import { setStateOfPopUps } from '../../../redux/actions';

import { config } from '../../../config';

const axios = require('axios');

const navLinks = [
    { text: 'Главная', url: '/' },
    { text: 'О марафоне', url: '/about' },
    { text: 'Новости', url: '/news/1' },
    // { text: 'Календарь событий', url: '/calendar-of-events' },
    { text: 'Карта высадки', url: '/events-map' },
    // { text: 'Сдать на переаботку', url: '/' },
];

let Header = ({ setStateOfPopUps, surname, name, img }) => {
    const [navLine, setNavLine] = useState({
        width: '0px',
        transform: 'translateX(0px)',
    });
    const [countSum, setCountSum] = useState(0);
    useEffect(() => {
        getTreesCount().then((result) => {
            setCountSum(result.count__sum);
        });
    });
    const [menuBurgerIsOpen, setStateMenuBurger] = useState(false);
    const handleLogIn = () => {
        setStateOfPopUps({
            city: false,
            logIn: true,
            info: false,
        });
    };
    const handleCity = () => {
        setStateOfPopUps({
            city: true,
            logIn: false,
            info: false,
        });
    };
    const handleHover = (e) => {
        if (e) {
            setNavLine({
                width: e.target.offsetWidth + 'px',
                transform: `translateX(${e.target.offsetLeft}px)`,
            });
        } else {
            setNavLine(false);
        }
    };

    const handleBurgerMenu = () => {
        setStateMenuBurger((prev) => !prev);
    };
    return (
        <>
            <header className="main-header__wrapper main-padding-horizontal">
                <div className="main-header">
                    <div className="main-header__burger-wrapper">
                        <Burger
                            addClasses={['main-header__burger']}
                            onClick={handleBurgerMenu}
                        />
                        <div className="number-of-trees main-header__number-of-trees main-header__number-of-trees_tablet">
                            <img
                                src={tree}
                                alt=""
                                className="number-of-trees__img"
                            ></img>
                            <div className="number-of-trees__text">
                                <span className="number-of-trees__bold">
                                    {countSum} деревьев
                                </span>{' '}
                                посажено
                            </div>
                        </div>
                    </div>
                    <div className="main-header__row">
                        <img
                            src={logoSber}
                            alt=""
                            className="main-logo main-header__main-logo"
                        ></img>
                        <div className="vertical-line"></div>
                        <img
                            src={logoGM}
                            alt=""
                            className="green-marathon main-header__green-marathon"
                        ></img>
                        <div className="vertical-line"></div>
                        <div className="number-of-trees main-header__number-of-trees main-header__number-of-trees_desktop">
                            <img
                                src={tree}
                                alt=""
                                className="number-of-trees__img"
                            ></img>
                            <div className="number-of-trees__text">
                                <span className="number-of-trees__bold">
                                    {countSum} деревьев
                                </span>{' '}
                                посажено
                            </div>
                        </div>
                    </div>
                    {/* <Location
                        onClick={handleCity}
                        addClasses={['main-header__location']}
                    /> */}
                </div>
                <nav className="main-header__nav nav">
                    <ul className="nav__ul">
                        {navLinks.map((item) => (
                            <li
                                className="nav__item"
                                key={item.text + item.url}
                            >
                                <Link
                                    to={item.url}
                                    onMouseOver={(e) => handleHover(e)}
                                    className="nav__link"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {name ? (
                        <PersonalAreaIcon
                            img={img}
                            name={name}
                            surname={surname}
                        />
                    ) : (
                        <Button
                            onClick={handleLogIn}
                            addClasses={['main-header__log-in']}
                        >
                            <img
                                src={profileImg}
                                alt=""
                                className="button__img"
                            ></img>
                            Войти
                        </Button>
                    )}

                    <div className="nav__line" style={navLine}></div>
                </nav>
                <MenuBurger navLinks={navLinks} isActive={menuBurgerIsOpen} />
                <div className="number-of-trees main-header__number-of-trees_mobile">
                    <img
                        src={tree}
                        alt=""
                        className="number-of-trees__img"
                    ></img>
                    <div className="number-of-trees__text">
                        <span className="number-of-trees__bold">
                            {countSum} деревьев
                        </span>{' '}
                        посажено
                    </div>
                </div>
            </header>
            <div className="main-header__mobile-plug"></div>
        </>
    );
};

async function getTreesCount() {
    return axios
        .get(config.domain + '/api/get_trees_count/', {
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

const mapStateToProps = (state) => {
    return {
        surname: state.account.surname,
        name: state.account.name,
        img: state.account.img,
    };
};

Header = connect(mapStateToProps, { setStateOfPopUps })(Header);

export { Header };
