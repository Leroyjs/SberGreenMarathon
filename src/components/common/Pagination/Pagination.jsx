import React from 'react';
import './style.scss';

import { Link, useParams } from 'react-router-dom';

import arrowImg from './next.svg';

export const Pagination = ({ startURL, numberOfPages }) => {
    const { page } = useParams();

    const getPaginationItem = () => {
        const content = [];
        for (let i = 0; i < numberOfPages; i++) {
            content.push(
                <PaginationItem
                    url={startURL}
                    key={i}
                    number={i + 1}
                    isActive={page !== String(i + 1)}
                />
            );
        }
        return content;
    };

    return (
        <ul className="pagination">
            {getPaginationItem()}
            {page < numberOfPages && (
                <Link to={startURL + (+page + 1)} className="pagination__next">
                    Далее
                    <img src={arrowImg} alt="" className="pagination__arrow" />
                </Link>
            )}
        </ul>
    );
};

const PaginationItem = ({ url, number, isActive }) => {
    return isActive ? (
        <li className="pagination__li">
            <Link to={url + number} className="pagination__link">
                {number}
            </Link>
        </li>
    ) : (
        <li className="pagination__li pagination__link pagination__link_active">
            {number}
        </li>
    );
};
