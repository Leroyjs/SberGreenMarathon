import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';

import { CloseButton } from '../../UI/CloseButton/CloseButton';
import { TitleH3PopUp, TitleH3 } from '../../UI/TitleH3/TitleH3';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';

import bg from './bg.svg';

import { config } from '../../../config.js';

const axios = require('axios');

let LogIn = ({ setStateOfPopUps, setStateOfAccount }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [forgot, setForgot] = useState(false);
    const history = useHistory();
    const handleClose = () => {
        setStateOfPopUps({
            city: false,
            logIn: false,
            info: false,
        });
    };
    const handleForgot = () => {
        setForgot(true);
    };
    const handleLogIn = (e) => {
        e.preventDefault();
        const options = {
            headers: {
                Authorization: 'gm',
            },
        };
        if (forgot) {
            axios
                .post(
                    config.domain + '/api/password_reset/',
                    { email },
                    options
                )
                .then(
                    (response) => {
                        setStateOfPopUps({
                            city: false,
                            logIn: false,
                            info: false,
                            forgotPassword: true,
                        });
                        history.push('/');
                    },
                    (error) => {
                        setEmail('');
                        setPassword('');
                        setError('Такоой почты не существует');
                        console.log(error);
                    }
                );
        } else {
            axios
                .post(
                    config.domain + '/api/login/',
                    { email, password },
                    options
                )
                .then(
                    (response) => {
                        setStateOfAccount(response.data);
                        handleClose();
                        history.push('/');
                        history.go(0);
                    },
                    (error) => {
                        setEmail('');
                        setPassword('');
                        setError('Неверное имя пользователя или пароль');
                        console.log(error);
                    }
                );
        }
    };
    return (
        <div className="log-in">
            <img src={bg} alt="" className="log-in__bg" />
            <CloseButton handler={handleClose}></CloseButton>
            <TitleH3PopUp>Вход</TitleH3PopUp>
            <form onSubmit={(e) => handleLogIn(e)}>
                <div className="log-in__content">
                    <Input
                        title="E-mail"
                        externalValue={email}
                        placeholder="Введите Ваш e-mail"
                        addClasses={['log-in__input']}
                        handler={(value) => {
                            setEmail(value);
                        }}
                    ></Input>
                    {!forgot && (
                        <Input
                            type="password"
                            title="Пароль"
                            externalValue={password}
                            handler={(value) => {
                                setPassword(value);
                            }}
                            placeholder="Введите Ваш пароль"
                            addClasses={['log-in__input']}
                        ></Input>
                    )}
                    {error && <div className="log-in__error">{error}</div>}
                </div>
                <div className="log-in__buttons">
                    {forgot ? (
                        <Button>Отправить пароль</Button>
                    ) : (
                        <Button>Войти</Button>
                    )}
                    {!forgot && (
                        <span onClick={handleForgot} className="log-in__forgot">
                            Забыл пароль
                        </span>
                    )}
                </div>
            </form>
            <div className="log-in__horizontal-line"></div>
            <TitleH3>
                У меня нет <br /> логина и пароля
            </TitleH3>
            <div className="log-in__buttons">
                <Link onClick={handleClose} to="/registration">
                    <Button>Зарегистрироваться</Button>
                </Link>
            </div>
        </div>
    );
};

export { LogIn };
