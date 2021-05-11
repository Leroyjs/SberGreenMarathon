import React, { useState, useEffect } from 'react';
import './style.scss';

import { TitleH3 } from '../../UI/TitleH3/TitleH3';
import { Text } from '../../UI/Text/Text';
import { Button } from '../../UI/Button/Button';
import { Date } from '../../common/Date/Date';

import locationImg from './media/location.svg';

import { connect } from 'react-redux';
import { setStateOfPopUps } from '../../../redux/actions';

import { config } from '../../../config';

const axios = require('axios');

let EventItem = ({
    title,
    text,
    time,
    date,
    id,
    location,
    token,
    setStateOfPopUps,
    attendingInit,
}) => {
    const [attending, setAttending] = useState(attendingInit);
    const [localDate, setLocalDate] = useState(date);
    const [localTime, setLocalTime] = useState(time);

    useEffect(() => {
        const offset = new window.Date().getTimezoneOffset() / 60;

        let [hour, minutes] = localTime.split(':');
        let [day, month, year] = localDate.split('.');
        const date = new window.Date();
        const daysInMonth =
            32 -
            new window.Date(date.getFullYear(), date.getMonth(), 32).getDate();
        hour -= offset;
        if (hour >= 24) {
            hour -= 24;
            if (day >= daysInMonth) {
                if (month >= 12) {
                    month = 1;
                    year = +year + 1;
                } else {
                    month = 1 + +month;
                    day = 1;
                }
            } else {
                day = 1 + +day;
            }
        }
        setLocalDate(`${day}.${month}.${year}`);

        if (localTime !== '00:00') {
            setLocalTime(`${hour}:${minutes}`);
        } else {
            setLocalTime(`Время уточняется...`);
        }
    }, []);

    const handleCheckIn = (id) => {
        if (token) {
            const options = {
                headers: {
                    Authorization: 'gm ' + token,
                },
            };
            axios
                .post(
                    config.domain + '/api/check_in/',
                    {
                        event: id,
                    },
                    options
                )
                .then(
                    (response) => {
                        setAttending(true);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        } else {
            setStateOfPopUps({
                city: false,
                logIn: true,
                info: false,
            });
        }
    };
    return (
        <div className="calendar-slider__item-wrapper">
            <div className="calendar-slider__item">
                <div className="calendar-slider__date">
                    <Date time={localTime} date={localDate} />
                </div>
                <TitleH3 addClasses={['calendar-slider__title']}>
                    {title}
                </TitleH3>
                <Text addClasses={['calendar-slider__text']}>{text}</Text>
                <div className="calendar-slider__location">
                    <img
                        src={locationImg}
                        alt=""
                        className="calendar-slider__icon"
                    ></img>
                    <span className="calendar-slider__location-text">
                        {location}
                    </span>
                </div>
                {!attending ? (
                    <Button
                        addClasses={['calendar-slider__button']}
                        onClick={() => handleCheckIn(id)}
                    >
                        Я пойду
                    </Button>
                ) : (
                    <span className="calendar-slider__button calendar-slider__button_done">
                        Вы записались
                    </span>
                )}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        token: state.account.token,
    };
};
EventItem = connect(mapStateToProps, { setStateOfPopUps })(EventItem);

export { EventItem };
