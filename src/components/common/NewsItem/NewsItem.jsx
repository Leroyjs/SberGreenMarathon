import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { TitleH3 } from '../../UI/TitleH3/TitleH3';
import { Text } from '../../UI/Text/Text';
import { Date } from '../../common/Date/Date';

export const NewsItem = ({ img, title, text, date, time, id }) => {
    return (
        <div className="news-item">
            <div
                className="news-item__img"
                style={{ backgroundImage: `url(${img})` }}
            ></div>
            <div className="news-item__main-content">
                <div className="news-item__date">
                    <Date time={time} date={date} />
                </div>
                <TitleH3 addClasses={['news-item__title']}>{title}</TitleH3>
                <Text addClasses={['news-item__text']}>
                    {text.substr(0, 250)}...
                </Text>
                <Link to={`/news/article/${id}`} className="news-item__all">
                    Читать полностью
                </Link>
            </div>
        </div>
    );
};
