import React from 'react';
import './style.scss';

export const LegendItem = ({ text, img }) => (
    <div className="legend-item">
        <img src={img} alt="" className="legend-item__img" />
        <span className="legend-item__text">{text}</span>
    </div>
);
