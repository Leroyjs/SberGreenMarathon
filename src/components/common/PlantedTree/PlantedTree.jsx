import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import tree from './tree.svg';

export const PlantedTree = () => {
    return (
        <Link className="planted-tree__wrapper" to="/planted-tree">
            <div className="planted-tree">
                <img src={tree} alt="" className="planted-tree__img" />
                <span className="planted-tree__text">Я посадил дерево</span>
            </div>
        </Link>
    );
};
