import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import Flickity from 'flickity';

import { TabItem } from '../../common/TabItem/TabItem';
import { TitleH3PopUp, TitleH3 } from '../../UI/TitleH3/TitleH3';

import arrowLeft from './media/arrow-left.svg';
import arrowRight from './media/arrow-right.svg';

export const TabList = ({ tabArray = [], handler }) => {
    const _tabList = useRef(null);
    const [tabListFlickity, setTabListFlickity] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChange = (index) => {
        handler(index);
        setActiveIndex(index);
    };
    useEffect(() => {
        setTabListFlickity(
            new Flickity(_tabList.current, {
                cellAlign: 'left',
                contain: true,
                pageDots: false,
                prevNextButtons: false,
            })
        );
    }, [tabArray]);

    const handleNext = () => {
        tabListFlickity.next();
    };
    const handlePrev = () => {
        tabListFlickity.previous();
    };
    return (
        <div className="tab-list">
            <div className="tab-list__title-wrapper main-padding-horizontal">
                <TitleH3PopUp addClasses={['tab-list__title']}>
                    Посаженные деревья
                </TitleH3PopUp>
                <div className="tab-list__arrows">
                    <img
                        src={arrowLeft}
                        alt=""
                        className="tab-list__arrow tab-list__arrow_left"
                        onClick={handlePrev}
                    ></img>
                    <img
                        src={arrowRight}
                        alt=""
                        className="tab-list__arrow tab-list__arrow_right"
                        onClick={handleNext}
                    ></img>
                </div>
            </div>
            <div ref={_tabList} className="tab-list__main">
                {tabArray.map((item, index) => (
                    <TabItem
                        key={
                            item.coords[0] +
                            item.coords[1] +
                            item.date +
                            item.time
                        }
                        isActive={activeIndex === index}
                        onClick={() => handleChange(index)}
                        date={item.date}
                        time={item.time}
                    >
                        <TitleH3>{`Деревьев посажено: ${item.count} `}</TitleH3>
                    </TabItem>
                ))}
            </div>
        </div>
    );
};
