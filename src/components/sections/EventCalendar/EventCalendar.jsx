import React, { useRef, useEffect, useState } from 'react';
import './style.scss';

import Flickity from 'flickity';

import arrowLeft from './media/arrow-left.svg';
import arrowRight from './media/arrow-right.svg';

import { EventItem } from '../../common/EventItem/EventItem';
import { TitleH2 } from '../../UI/TitleH2/TitleH2';

let EventCalendar = ({ eventList }) => {
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
        <section className="calendar">
            <div className="calendar__title-wrapper main-padding-horizontal">
                <TitleH2 addClasses={['calendar__title']}>
                    Календарь событий
                </TitleH2>
                <div className="calendar__arrows">
                    <img
                        src={arrowLeft}
                        alt=""
                        className="calendar__arrow calendar__arrow_left"
                        onClick={handlePrev}
                    ></img>
                    <img
                        src={arrowRight}
                        alt=""
                        className="calendar__arrow calendar__arrow_right"
                        onClick={handleNext}
                    ></img>
                </div>
            </div>
            <div
                ref={_calendarSlider}
                className="calendar__slider calendar-slider"
            >
                {eventList.map((item) => (
                    <EventItem
                        key={item.uuid}
                        id={item.uuid}
                        title={item.title}
                        text={item.description}
                        date={item.event_date}
                        time={item.event_time}
                        attendingInit={item.attending}
                        location={item.city}
                    ></EventItem>
                ))}
            </div>
        </section>
    );
};

export { EventCalendar };
