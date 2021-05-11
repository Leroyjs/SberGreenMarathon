import React, { useEffect, useState, useRef } from 'react';
import './style.scss';
import Flickity from 'flickity';

import { TitleH1 } from '../../../components/UI/TitleH1/TitleH1';

import arrowLeftImg from './media/arrow-left.svg';
import arrowRightImg from './media/arrow-right.svg';

export const CalendarEventsTabs = () => {
    const _calendarSlider = useRef(null);
    const [calendarSliderFlickity, setCalendarSliderFlickity] = useState(false);

    useEffect(() => {
        setCalendarSliderFlickity(
            new Flickity(_calendarSlider.current, {
                cellAlign: 'left',
                contain: true,
                pageDots: false,
                prevNextButtons: false,
            })
        );
    }, []);
    const handleNext = () => {
        calendarSliderFlickity.next();
    };
    const handlePrev = () => {
        calendarSliderFlickity.previous();
    };
    return (
        <section className="calendar-events-tabs">
            <div className="calendar-events-tabs__title-wrapper main-padding-horizontal">
                <TitleH1>Календарь событий</TitleH1>
                <div className="calendar-events-tabs__arrows ">
                    <img
                        onClick={handlePrev}
                        src={arrowLeftImg}
                        alt=""
                        className="calendar-events-tabs__arrow calendar-events-tabs__arrow_left"
                    />
                    <img
                        onClick={handleNext}
                        src={arrowRightImg}
                        alt=""
                        className="calendar-events-tabs__arrow calendar-events-tabs__arrow_right"
                    />
                </div>
            </div>
            <div ref={_calendarSlider} className="calendar-events-tabs"></div>
        </section>
    );
};
