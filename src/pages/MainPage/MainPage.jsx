import React, { useEffect, useState } from 'react';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { OfferSlider } from '../../components/sections/OfferSlider/OfferSlider.jsx';
import { About } from '../../components/sections/About/About.jsx';
import { EventCalendar } from '../../components/sections/EventCalendar/EventCalendar';
import { Top } from '../../components/sections/Top/Top';
import { Map } from '../../components/sections/Map/Map';
import { PhotoGallery } from '../../components/sections/PhotoGallery/PhotoGallery';
import { LatestNews } from '../../components/sections/LatestNews/LatestNews';
import { Footer } from '../../components/sections/Footer/Footer.jsx';

import { connect } from 'react-redux';

import { config } from '../../config.js';

const axios = require('axios');

let MainPage = ({ token }) => {
    const [eventList, setEventList] = useState([]);
    const [treesList, setTreesList] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        getEvents(token).then((events) => {
            setEventList(events);
        });
        getTrees().then((trees) => {
            console.warn(trees);
            setTreesList(trees);
        });
        getNews().then((news) => {
            setNews(news);
        });
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                <OfferSlider buttons={true} />
                <About />
                {eventList.length ? (
                    <EventCalendar eventList={eventList} />
                ) : undefined}
                <Top />
                {treesList.length !== 0 ? (
                    <Map treesList={treesList} />
                ) : undefined}
                <PhotoGallery />
                <LatestNews news={news} />
            </main>
            <Footer />
        </>
    );
};

async function getEvents(token = '') {
    if (token) token = ' ' + token;
    return axios
        .get(config.domain + '/api/get_events/', {
            headers: {
                Authorization: 'gm' + token,
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
async function getTrees() {
    return axios
        .get(config.domain + '/api/get_tree_events/', {
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
async function getTop() {
    return axios
        .get(config.domain + '/api/get_top_10/', {
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

const mapStateToProps = (state) => {
    return {
        token: state.account.token,
    };
};
MainPage = connect(mapStateToProps, null)(MainPage);

export { MainPage };
