import React, { useState, useEffect } from 'react';
import './style.scss';

import { WinnerItem } from '../../common/WinnerItem/WinnerItem';
import { TitleH2 } from '../../UI/TitleH2/TitleH2';

import someWinnerImg from './someWinner.png';

export const Top = ({ list }) => {
    // const [topList, setTopList] = useState('top__tab_plant');
    // const handleSelectTab = (newTab) => {
    //     setTopList(newTab);
    // };

    return (
        <section className="top">
            <div className="top__inner  main-padding-horizontal">
                <div className="top__title-wrapper">
                    <TitleH2>ТОП-10 участников</TitleH2>
                    {/* <div className="top__tabs">
                        <button
                            onClick={() => handleSelectTab('top__tab_plant')}
                            className={
                                'top__tab ' +
                                (topList === 'top__tab_plant'
                                    ? 'top__tab_active'
                                    : undefined)
                            }
                        >
                            Посадка
                        </button>
                        <button
                            onClick={() => handleSelectTab('top__tab_marathon')}
                            className={
                                'top__tab ' +
                                (topList === 'top__tab_marathon'
                                    ? 'top__tab_active'
                                    : undefined)
                            }
                        >
                            Марафон
                        </button>
                    </div> */}
                </div>

                <div className="top__items-wrapper">
                    {list.map((item, index) => (
                        <div
                            className="top__item"
                            key={item.name + item.place + item.score}
                        >
                            <WinnerItem
                                img={item.img}
                                score={item.user_trees}
                                place={index + 1}
                                name={item.name}
                                surname={item.surname}
                            ></WinnerItem>
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
};

// function BubbleSort(A) {
//     // A - массив, который нужно
//     // отсортировать по возрастанию.
//     const length = A.length;
//     A.forEach((item, i) => {
//         for (let j = 0; j < length - 1 - i; j++) {
//             if (A[j + 1].score < A[j].score) {
//                 let t = A[j + 1];
//                 A[j + 1] = A[j];
//                 A[j] = t;
//             }
//         }
//     });
//     return A; // На выходе сортированный по возрастанию массив A.
// }

const winners = [
    {
        img: someWinnerImg,
        score: 180,
        place: 1,
        name: 'Андрей Иванов',
    },
    {
        img: someWinnerImg,
        score: 80,
        place: 2,
        name: 'Андрей Иванов',
    },
    {
        img: someWinnerImg,
        score: 80,
        place: 3,
        name: 'Андрей Иванов',
    },
    {
        img: someWinnerImg,
        score: 80,
        place: 4,
        name: 'Андрей Иванов',
    },
    {
        img: someWinnerImg,
        score: 80,
        place: 5,
        name: 'Андрей Иванов',
    },
    {
        img: someWinnerImg,
        score: 80,
        place: 6,
        name: 'Андрей Иванов',
    },
    {
        img: someWinnerImg,
        score: 80,
        place: 7,
        name: 'Андрей Иванов',
    },
    {
        img: someWinnerImg,
        score: 80,
        place: 8,
        name: 'Андрей Иванов',
    },
    {
        img: someWinnerImg,
        score: 80,
        place: 9,
        name: 'Андрей Иванов',
    },
    {
        img: someWinnerImg,
        score: 80,
        place: 10,
        name: 'Андрей Иванов',
    },
];
