import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

import {TitleH2} from '../../UI/TitleH2/TitleH2';
import {NewsItem} from '../../common/NewsItem/NewsItem';

import someNewsImg from './someNews.png';
import {mockImg} from "../../../App";



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
