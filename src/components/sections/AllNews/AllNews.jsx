import React, { useState, useEffect } from 'react';
import './style.scss';

import { BreadCrumbs } from '../../common/BreadCrumbs/BreadCrumbs';
import { TitleH1 } from '../../UI/TitleH1/TitleH1';
import { NewsItem } from '../../common/NewsItem/NewsItem';
import { Pagination } from '../../common/Pagination/Pagination';

import { config } from '../../../config';

const axios = require('axios');

export const AllNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        getNews().then((news) => {
            setNews(news);
        });
    }, []);
    return (
        <section className="all-news main-padding-horizontal">
            <div className="all-news__bread-crumbs">
                <BreadCrumbs list={breadCrumbsList} />
            </div>
            <TitleH1>Новости</TitleH1>
            <div className="all-news__main-wrapper">
                {news.map((item) => (
                    <div className="all-news__item-wrapper" key={item.uuid}>
                        <NewsItem
                            id={item.uuid}
                            title={item.title}
                            text={item.text}
                            img={item.img}
                            date={item.news_date}
                            time={item.news_time}
                        ></NewsItem>
                    </div>
                ))}
            </div>
            {/* <div className="all-news__pagination">
                <Pagination startURL="/news/" numberOfPages={6}></Pagination>
            </div> */}
        </section>
    );
};

async function getNews() {
    return axios
        .get(config.domain + '/api/get_news/', {
            headers: {
                Authorization: 'gm',
            },
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return [];
        });
}
const breadCrumbsList = [
    {
        title: 'Главня',
        link: '/',
    },
    {
        title: 'Новости',
        link: '/news',
    },
];
