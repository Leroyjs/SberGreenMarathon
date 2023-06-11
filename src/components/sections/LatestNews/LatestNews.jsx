import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

import {TitleH2} from '../../UI/TitleH2/TitleH2';
import {NewsItem} from '../../common/NewsItem/NewsItem';

import someNewsImg from './someNews.png';

const mockImg = [
    'https://vbudushee.ru/upload/iblock/fe5/3321ctowmqewp3k4dcic0ytch2gdl7kv/%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%97%D0%9C.png',
    'https://static.irk.ru/media/img/site/gallery/30624/8e26a344-17e9-4304-a37b-c6be50fab0bf_jpg_800x1000_q85.jpg',
    'https://marathonec.ru/wp-content/uploads/2019/06/green-marathon-running-hearts-1.jpg'
]

export const LatestNews = ({news}) => {
    return (
        <section className="latest-news">
            <div className="latest-news__circle-wrapper">
                <div className="latest-news__circle"></div>
            </div>
            <div className="latest-news__inner  main-padding-horizontal">
                <div className="latest-news__title-wrapper">
                    <TitleH2>Последние новости</TitleH2>
                    <Link to="/news/1" className="latest-news__show-all">
                        Показать все новости
                    </Link>
                </div>
                <div className="latest-news__news-wrapper">
                    {news.map((item, index) => {
                        if (index <= 2) {
                            return (
                                <div
                                    className="latest-news__item-wrapper"
                                    key={item.uuid}
                                >
                                    <NewsItem
                                        img={mockImg[index % 3]}
                                        id={item.uuid}
                                        title={item.title}
                                        text={item.text}
                                        date={item.news_date}
                                        time={item.news_time}
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
};
