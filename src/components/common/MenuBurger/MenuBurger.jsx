import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import { Location } from '../../UI/Location/Location';
import { MinorButton } from '../../UI/MinorButton/MinorButton';
import { Button } from '../../UI/Button/Button';
import { PersonalAreaIcon } from '../../common/PersonalAreaIcon/PersonalAreaIcon';

import profileImg from './profile.svg';

import { connect } from 'react-redux';
import { setStateOfPopUps } from '../../../redux/actions';

let MenuBurger = ({
    setStateOfPopUps,
    surname,
    name,
    img,
    navLinks = [],
    isActive = false,
}) => {
    const handleLogIn = () => {
        setStateOfPopUps({
            city: false,
            logIn: true,
            info: false,
        });
    };
    const handleLocation = () => {
        setStateOfPopUps({
            city: true,
            logIn: false,
            info: false,
        });
    };
    return (
        <div
            className={
                'menu-burger main-padding-horizontal ' +
                (isActive ? 'menu-burger_active' : undefined)
            }
        >
            <nav className="menu-burger__nav">
                <ul className="menu-burger__ul">
                    {navLinks.map((item) => (
                        <li
                            className="menu-burger__li"
                            key={item.url + item.text}
                        >
                            <Link to={item.url} className="menu-burger__link">
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="menu-burger__bottom-wrapper">
                <div className="menu-burger__buttons">
                    {name ? (
                        <PersonalAreaIcon
                            img={img}
                            name={name}
                            surname={surname}
                        />
                    ) : (
                        <Button
                            onClick={handleLogIn}
                            addClasses={['menu-burger__button']}
                        >
                            <img
                                src={profileImg}
                                alt=""
                                className="button__img"
                            ></img>
                            Войти
                        </Button>
                    )}
                    {/* <MinorButton>Опубликовать фото</MinorButton> */}
                </div>
                {/* <Location onClick={handleLocation} /> */}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        surname: state.account.surname,
        name: state.account.name,
        img: state.account.img,
    };
};

MenuBurger = connect(mapStateToProps, { setStateOfPopUps })(MenuBurger);

export { MenuBurger };
