import React, { useState, useEffect } from 'react';
import './style.scss';

export const Counter = ({
    addClasses = [],
    initDate = {
        event_day: 0,
        event_hour: 0,
        event_minute: 0,
        event_second: 0,
    },
}) => {
    const [second, setSecond] = useState(initDate.event_second);
    const [minute, setMinute] = useState(initDate.event_minute);
    const [hour, setHour] = useState(initDate.event_hour);
    const [day, setDay] = useState(initDate.event_day);
    useEffect(() => {
        const interval = setInterval(() => {
            setSecond((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (second <= -1) {
            if (minute <= -1) {
                if (hour <= -1) {
                    if (day <= -1) {
                        setSecond(0);
                        setMinute(0);
                        setHour(0);
                        setDay(0);
                    } else {
                        setSecond(59);
                        setMinute(59);
                        setHour(59);
                        setDay((prev) => prev - 1);
                    }
                } else {
                    setSecond(59);
                    setMinute(59);
                    setHour((prev) => prev - 1);
                }
            } else {
                setSecond(59);
                setMinute((prev) => prev - 1);
            }
        }
    }, [second]);
    return (
        <div className={addClasses.join(' ') + ' counter'}>
            <div className="counter__column">
                <div className="counter__item">{day}</div>
                <div className="counter__text">дни</div>
            </div>
            <div className="counter__separator">:</div>
            <div className="counter__column">
                <div className="counter__item">{hour}</div>
                <div className="counter__text">часы</div>
            </div>
            <div className="counter__separator">:</div>
            <div className="counter__column">
                <div className="counter__item">{minute}</div>
                <div className="counter__text">минуты</div>
            </div>
            <div className="counter__separator">:</div>
            <div className="counter__column">
                <div className="counter__item">{second}</div>
                <div className="counter__text">секунды</div>
            </div>
        </div>
    );
};
