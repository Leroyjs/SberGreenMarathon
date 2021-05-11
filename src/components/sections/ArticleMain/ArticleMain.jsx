import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

import { BreadCrumbs } from '../../common/BreadCrumbs/BreadCrumbs';
import { TitleH1 } from '../../UI/TitleH1/TitleH1';
import { TitleH3 } from '../../UI/TitleH3/TitleH3';
import { Text } from '../../UI/Text/Text';
import { Date } from '../../common/Date/Date';
import { PhotoItem } from '../../common/PhotoItem/PhotoItem';
import { Like } from '../../common/Like/Like';

import arrowRight from './media/arrow-right.svg';
import arrowLeft from './media/arrow-left.svg';

import { config } from '../../../config';

const axios = require('axios');

export const ArticleMain = () => {
    const [article, setArticle] = useState({});
    const { id } = useParams();
    const [breadCrumbsList, setBreadCrumbsList] = useState([]);

    useEffect(() => {
        getNews().then((news) => {
            setArticle(getArticle(news, id));
            setBreadCrumbsList([
                {
                    title: 'Главная',
                    link: '/',
                },
                {
                    title: 'Новости',
                    link: '/news',
                },
                {
                    title: getArticle(news, id).title,
                    link: '/',
                },
            ]);
        });
    }, []);

    return (
        <section className="article-main">
            <div className="article-main__bread-crumbs">
                <BreadCrumbs list={breadCrumbsList} />
            </div>
            <TitleH1>{article.title}</TitleH1>
            <div className="article-main__date">
                <Date time={article.news_time} date={article.news_date} />
            </div>
            <img src={article.img} alt="" className="article-main__img" />
            <div className="article-main__text">
                <Text>{article.text}</Text>
            </div>
            {/* <div className="article-main__gallery">
                <PhotoItem img={someImg} />
                <PhotoItem img={someImg} />
                <PhotoItem img={someImg} />
            </div> */}
            {/* <div className="article-main__like">
                <Like />
            </div>
            <div className="article-main__next-prev-wrapper">
                <div className="article-main__next-prev">
                    <img
                        src={arrowLeft}
                        alt=""
                        className="article-main__arrow-prev"
                    />
                    Предыдущая новость
                </div>
                <div className="article-main__next-prev">
                    Следующая новость
                    <img
                        src={arrowRight}
                        alt=""
                        className="article-main__arrow-next"
                    />
                </div>
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

function getArticle(news, id) {
    let article;
    news.forEach((item) => {
        if (item.uuid === id) {
            article = item;
        }
    });
    return article;
}
