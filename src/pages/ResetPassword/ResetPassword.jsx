import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { Footer } from '../../components/sections/Footer/Footer.jsx';
import { Input } from '../../components/UI/Input/Input';
import { Button } from '../../components/UI/Button/Button';
import { TitleH1 } from '../../components/UI/TitleH1/TitleH1';

import { config } from '../../config';

const axios = require('axios');

export const ResetPassword = ({ location }) => {
    const [passwordError, setPasswordError] = useState(false);
    const [passwordSecondError, setPasswordSecondError] = useState(false);
    const [password, setPassword] = useState(false);
    const [passwordSecond, setPasswordSecond] = useState(false);
    const history = useHistory();

    const handlerSubmit = (e) => {
        const token = window.location.search.split('?token=')[1].split('%')[0];
        console.log({ password, token });
        e.preventDefault();
        if (!checkErrors()) {
            const options = {
                headers: {
                    Authorization: 'gm',
                },
            };
            axios
                .post(
                    config.domain + '/api/password_reset/confirm/',
                    { password, token },
                    options
                )
                .then(
                    (response) => {
                        console.log(response);
                        history.push('/');
                    },
                    (error) => {
                        setPassword('');
                        setPasswordSecond('');
                        console.log(error);
                    }
                );
        }
    };

    return (
        <div className="reset-password__wrapper">
            <Header />
            <main className="main reset-password">
                <form
                    className="reset-password__inner"
                    onSubmit={(e) => handlerSubmit(e)}
                >
                    <TitleH1 addClasses={['reset-password__title']}>
                        Сброс пароля
                    </TitleH1>
                    <div className="reset-password__input-item">
                        <Input
                            externalValue={password}
                            error={passwordError}
                            handler={(value) => {
                                setPassword(value);
                            }}
                            type="password"
                            title="Пароль"
                            placeholder="Введите Ваш пароль"
                            desc="Пароль должен состоять не менее чем из 8 символов и содержать заглавные и латинские буквы"
                        />
                    </div>
                    <div className="reset-password__input-item">
                        <Input
                            externalValue={passwordSecond}
                            type="password"
                            error={passwordSecondError}
                            handler={(value) => {
                                setPasswordSecond(value);
                            }}
                            title="Повторите пароль"
                            placeholder="Повторите пароль"
                        />
                    </div>
                    <Button>Сменить пароль</Button>
                </form>
            </main>
            <Footer />
        </div>
    );

    function checkErrors() {
        let errors = false;
        if (!password) {
            setPasswordError('Поле обязательно для заполнения');
            errors = true;
        } else {
            if (password.length < 8) {
                errors = true;
                setPasswordError(
                    'Пароль должен состоять не менее чем из 8 символов и содержать заглавные и латинские буквы'
                );
            } else {
                setPasswordError(false);
            }
        }
        if (!passwordSecond) {
            setPasswordSecondError('Поле обязательно для заполнения');
            errors = true;
        } else {
            if (passwordSecond !== password) {
                errors = true;
                setPasswordSecondError(
                    'Пароль и подтверждение пароля должны быть одинаковы'
                );
            } else {
                setPasswordSecondError(false);
            }
        }
        return errors;
    }
};
