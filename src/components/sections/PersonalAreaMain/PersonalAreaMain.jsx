import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

import { TitleH1 } from '../../UI/TitleH1/TitleH1';
import { TitleH3PopUp } from '../../UI/TitleH3/TitleH3';
import { BreadCrumbs } from '../../common/BreadCrumbs/BreadCrumbs';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';

import { connect } from 'react-redux';
import { setStateOfAccount } from '../../../redux/actions';

let PersonalAreaMain = ({
    setStateOfAccount,
    name,
    surname,
    email,
    city,
    password,
    img,
}) => {
    const [nameLoc, setName] = useState(name);
    const [surnameLoc, setSurname] = useState(surname);
    const [emailLoc, setEmail] = useState(email);
    const [cityLoc, setCity] = useState(city);
    const [passwordLoc, setPassword] = useState(password);
    const [passwordSecondLoc, setPasswordSecond] = useState(password);
    const [imgLoc, setImg] = useState(img);
    const history = useHistory();

    const handlerSubmit = (e) => {
        e.preventDefault();
        setStateOfAccount({
            name: nameLoc,
            surname: surnameLoc,
            email: emailLoc,
            city: cityLoc,
            password: passwordLoc,
        });
        history.push('/');
    };

    return (
        <section className="personal-area-main main-padding-horizontal">
            <div className="personal-area-main__bread-crumbs">
                <BreadCrumbs list={breadCrumbsList} />
            </div>
            <TitleH1>Личный кабинет</TitleH1>

            <form
                onSubmit={(e) => handlerSubmit(e)}
                className="personal-area-main__form"
            >
                <TitleH3PopUp>Личные данные</TitleH3PopUp>
                <div className="personal-area-main__img-wrapper">
                    {imgLoc ? (
                        <img
                            src={imgLoc}
                            alt=""
                            className="personal-area-main__img"
                        />
                    ) : (
                        <span className="personal-area-main__img-none">
                            {name[0] + surname[0]}
                        </span>
                    )}
                </div>
                <div className="personal-area-main__inputs">
                    <div className="personal-area-main__input">
                        <Input
                            isDisabled={true}
                            initialValue={nameLoc}
                            title="Ваше имя"
                            placeholder="Введите имя"
                            handler={setName}
                        />
                    </div>
                    <div className="personal-area-main__input">
                        <Input
                            isDisabled={true}
                            initialValue={surnameLoc}
                            title="Ваша фамилия"
                            placeholder="Введите фамилию"
                            handler={setSurname}
                        />
                    </div>
                    <div className="personal-area-main__input">
                        <Input
                            isDisabled={true}
                            initialValue={emailLoc}
                            title="Адрес электронной почты"
                            placeholder="Введите e-mail"
                            handler={setEmail}
                        />
                    </div>
                    <div className="personal-area-main__input">
                        <Input
                            isDisabled={true}
                            initialValue={cityLoc}
                            title="Ваш город"
                            placeholder="Выберите Ваш город"
                            handler={setCity}
                        />
                    </div>
                </div>
                {/* <TitleH3PopUp>Изменение пароля</TitleH3PopUp>
                <div className="personal-area-main__inputs">
                    <div className="personal-area-main__input">
                        <Input
                            initialValue={passwordLoc}
                            title="Пароль"
                            placeholder="Введите Ваш пароль"
                            desc="Пароль должен состоять не менее чем из 6 символов и содержать заглавные и латинские буквы"
                            handler={setPassword}
                        />
                    </div>
                    <div className="personal-area-main__input">
                        <Input
                            initialValue={passwordSecondLoc}
                            title="Повторите пароль"
                            placeholder="Повторите пароль"
                            handler={setPasswordSecond}
                        />
                    </div>
                </div> */}
                {/* <Button>Сохранить изменения</Button> */}
            </form>
        </section>
    );
};

const breadCrumbsList = [
    {
        title: 'Главная',
        link: '/',
    },
    {
        title: 'Личный кабинет',
        link: '/',
    },
];

const mapStateToProps = (state) => {
    return {
        name: state.account.name,
        surname: state.account.surname,
        email: state.account.email,
        city: state.account.city,
        password: state.account.password,
        img: state.account.img,
    };
};

PersonalAreaMain = connect(mapStateToProps, { setStateOfAccount })(
    PersonalAreaMain
);

export { PersonalAreaMain };
