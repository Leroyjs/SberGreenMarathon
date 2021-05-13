import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

import { TitleH1 } from '../../UI/TitleH1/TitleH1';
import { BreadCrumbs } from '../../common/BreadCrumbs/BreadCrumbs';
import { Input } from '../../UI/Input/Input';
import { InputSelect } from '../../UI/InputSelect/InputSelect';
import { Checkbox } from '../../UI/Checkbox/Checkbox';
import { Button } from '../../UI/Button/Button';

import { connect } from 'react-redux';
import { regNewAccount } from '../../../redux/actions';

import { config } from '../../../config.js';
import { citiesList } from '../../../citiesList';

const axios = require('axios');

let RegictrationMain = ({ regNewAccount }) => {
    const [name, setName] = useState(false);
    const [surname, setSurname] = useState(false);
    const [email, setEmail] = useState(false);
    const [city, setCity] = useState(false);
    const [password, setPassword] = useState(false);
    const [passwordSecond, setPasswordSecond] = useState(false);
    const [team, setTeam] = useState(false);
    const [teamActive, setTeamActive] = useState(false);
    const [agreement, setAgreement] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordSecondError, setPasswordSecondError] = useState(false);
    const [agreementError, setAgreementError] = useState(false);
    const history = useHistory();

    const handlerSubmit = (e) => {
        e.preventDefault();
        const errors = checkErrors();
        if (!errors) {
            registerNewUser(name, surname, email, city, password);
        }
    };

    const citiesListNew = [];
    citiesList.forEach((item) => {
        item.cities.forEach((item) => {
            citiesListNew.push(item.name);
        });
    });
    return (
        <section className="regictration-main">
            <div className="regictration-main__bread-crumbs">
                <BreadCrumbs list={breadCrumbsList} />
            </div>
            <TitleH1>Регистрация нового пользователя</TitleH1>
            <form
                onSubmit={(e) => handlerSubmit(e)}
                className="regictration-main__form"
            >
                <div className="regictration-main__inputs">
                    <div className="regictration-main__input-item">
                        <Input
                            externalValue={name}
                            error={nameError}
                            handler={(value) => {
                                setName(value);
                            }}
                            title="Ваше имя"
                            placeholder="Введите имя"
                        />
                    </div>
                    <div className="regictration-main__input-item">
                        <Input
                            externalValue={surname}
                            error={surnameError}
                            handler={(value) => {
                                setSurname(value);
                            }}
                            title="Ваша фамилия"
                            placeholder="Введите фамилию"
                        />
                    </div>
                    <div className="regictration-main__input-item">
                        <Input
                            externalValue={email}
                            error={emailError}
                            handler={(value) => {
                                setEmail(value);
                            }}
                            title="Адрес электронной почты"
                            placeholder="Введите e-mail"
                        />
                    </div>
                    <div className="regictration-main__input-item">
                        {/* <Input
                            error={cityError}
                            handler={(value) => {
                                setCity(value);
                            }}
                            title="Ваш город"
                            placeholder="Выберите Ваш город"
                        /> */}
                        <InputSelect
                            error={cityError}
                            handler={(value) => {
                                setCity(value);
                            }}
                            desc="Если в списке нет вашего города - выберите ближайший"
                            title="Ваш город"
                            placeholder="Выберите Ваш город"
                            list={citiesListNew}
                        />
                    </div>
                    <div className="regictration-main__input-item">
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
                    <div className="regictration-main__input-item">
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
                    <div className="regictration-main__team">
                        <div className="regictration-main__input-item">
                            <Input
                                externalValue={!teamActive ? teamActive : team}
                                handler={(value) => {
                                    setTeam(value);
                                }}
                                isDisabled={!teamActive}
                                title="Команда (если есть)"
                                placeholder="Введите название команды"
                            />
                        </div>
                        <div className="regictration-main__checkbox regictration-main__checkbox_team">
                            <Checkbox
                                handler={(value) => {
                                    setTeamActive(value);
                                }}
                                error={agreementError}
                            >
                                <p className="regictration-main__agreements">
                                    У меня есть команда
                                </p>
                            </Checkbox>
                        </div>
                    </div>
                </div>
                <div className="regictration-main__checkbox">
                    <Checkbox
                        handler={(value) => {
                            setAgreement(value);
                        }}
                        error={agreementError}
                    >
                        <p className="regictration-main__agreements">
                            Нажимая «Зарегистрироваться», Вы подтверждаете, что
                            ознакомлены, полностью согласны и принимаете условия
                            <br />
                            <a
                                target="_blank"
                                href="https://www.sber.ru/personal_policy"
                                className="regictration-main__agreements-link"
                            >
                                «Согласие на обработку персональных данных для
                                посетителей сайта»
                            </a>
                        </p>
                    </Checkbox>
                </div>
                <Button>Зарегистрироваться</Button>
            </form>
        </section>
    );
    function checkErrors() {
        let errors = false;
        if (!name) {
            setNameError('Поле обязательно для заполнения');
            errors = true;
        } else {
            setNameError(false);
        }
        if (!surname) {
            setSurnameError('Поле обязательно для заполнения');
            errors = true;
        } else {
            setSurnameError(false);
        }
        if (!email) {
            setEmailError('Поле обязательно для заполнения');
            errors = true;
        } else {
            if (isNotEmail(email)) {
                errors = true;
                setEmailError('Необходимо ввести email');
            } else {
                if (
                    email.toUpperCase().indexOf('sberbank.ru'.toUpperCase()) + 1
                ) {
                    errors = true;
                    setEmailError('Используйте только личную почту');
                } else {
                    setEmailError(false);
                }
            }
        }
        if (!city) {
            setCityError('Поле обязательно для заполнения');
            errors = true;
        } else {
            setCityError(false);
        }
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
        if (!agreement) {
            setAgreementError('Поле обязательно для заполнения');
            errors = true;
        } else {
            setAgreementError(false);
        }
        return errors;

        function isNotEmail(value) {
            return !email.match(
                /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i
            );
        }
    }
    function registerNewUser(name, surname, email, city, password) {
        const teamVar = !teamActive ? null : team;
        console.log(teamVar);
        const accountData = {
            name,
            surname,
            email,
            city,
            password,
            team: teamVar,
        };
        const options = {
            headers: {
                Authorization: 'gm',
            },
        };
        axios
            .post(config.domain + '/api/registration/', accountData, options)
            .then(
                (response) => {
                    regNewAccount(response.data);
                    history.push('/');
                },
                (error) => {
                    console.log(error.message);
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
        title: 'Регистрация',
        link: '/',
    },
];

RegictrationMain = connect(null, { regNewAccount })(RegictrationMain);

export { RegictrationMain };
