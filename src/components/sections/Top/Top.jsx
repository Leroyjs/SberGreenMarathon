import React, { useState, useEffect } from 'react';
import './style.scss';

import { WinnerItem } from '../../common/WinnerItem/WinnerItem';
import { TitleH2 } from '../../UI/TitleH2/TitleH2';

import someWinnerImg from './someWinner.png';

import { config } from '../../../config.js';
const axios = require('axios');

export const Top = () => {
    const [topList, setTopList] = useState('solo');
    const handleSelectTab = (newTab) => {
        console.log(topList);

        getTop(newTab).then((result) => {
            setTop(result);
            console.log(result);
            setTopList(newTab);
        });
    };

    const [top, setTop] = useState([]);

    useEffect(() => {
        getTop(topList).then((result) => {
            setTop(result);
        });
    }, []);

    return (
        <section className="top">
            <div className="top__inner  main-padding-horizontal">
                <div className="top__title-wrapper">
                    <TitleH2>ТОП-10</TitleH2>
                </div>

                <div className="top__items-wrapper">
                    {top.map((item, index) => (
                        <div
                            className="top__item"
                            key={
                                (item.team ? item.team.title : item.name) +
                                item.place +
                                item.score +
                                index
                            }
                        >
                            {topList === 'solo' ? (
                                <WinnerItem
                                    img={item.img}
                                    score={item.user_trees}
                                    place={index + 1}
                                    name={item.name}
                                    surname={item.surname}
                                ></WinnerItem>
                            ) : (
                                <WinnerItem
                                    img={item.img}
                                    score={item.user_trees}
                                    place={index + 1}
                                    name={
                                        item.team &&
                                        (item.team.title
                                            ? item.team.title
                                            : item.name)
                                    }
                                    surname={
                                        item.team &&
                                        (item.team.title ? '' : item.name)
                                    }
                                ></WinnerItem>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="top__circle-wrapper">
                <div className="top__circle top__circle_1"></div>
                <div className="top__circle top__circle_2"></div>
            </div>
        </section>
    );

    async function getTop(target) {
        console.log(topList);
        const url =
            target === 'team'
                ? config.domain + '/api/get_top_teams/'
                : config.domain + '/api/get_top_10/';
        return axios
            .get(url, {
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
};
