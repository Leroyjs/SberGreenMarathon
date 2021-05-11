import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

import { CloseButton } from '../../UI/CloseButton/CloseButton';
import { TitleH3PopUp } from '../../UI/TitleH3/TitleH3';
import { Button } from '../../UI/Button/Button';

import bg from './bg.svg';

export const Info = ({ title, buttonText, setStateOfPopUps }) => {
    const history = useHistory();
    const goToLogIn = () => {
        history.push('/');
        setStateOfPopUps({
            city: false,
            logIn: false,
            info: false,
            forgotPassword: false,
        });
    };
    const handleClose = () => {
        setStateOfPopUps({
            city: false,
            logIn: false,
            info: false,
            forgotPassword: false,
        });
    };
    return (
        <div className="info-pop-up">
            <img src={bg} alt="" className="info-pop-up__bg" />
            <CloseButton handler={handleClose}></CloseButton>.
            <TitleH3PopUp addClasses={['info-pop-up__title']}>
                {title}
            </TitleH3PopUp>
            <Button onClick={goToLogIn}>На главную</Button>
        </div>
    );
};
