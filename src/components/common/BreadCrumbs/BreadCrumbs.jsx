import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const BreadCrumbs = ({ list = [] }) => {
    return (
        <div className="bread-crumbs__wrapper">
            <ul className="bread-crumbs">
                {list.map((item, index) => (
                    <li
                        className="bread-crumbs__li"
                        key={item.title + item.link}
                    >
                        {index !== list.length - 1 ? (
                            <>
                                <Link
                                    to={item.link}
                                    className="bread-crumbs__link"
                                >
                                    {item.title}
                                </Link>

                                <div className="bread-crumbs__dot" />
                            </>
                        ) : (
                            <div className="bread-crumbs__link bread-crumbs__link_active">
                                {item.title}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
