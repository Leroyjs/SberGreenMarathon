import React from 'react';
import './style.scss';

export const WinnerItem = ({ img, place, name, score, surname }) => {
    const getBorder = (place) => {
        switch (place) {
            case 1:
                return '4px solid #FFCC00';
            case 2:
                return '4px solid #E0E0E0';
            case 3:
                return '4px solid #997A00';
            default:
                return 'none';
        }
    };
    const border = getBorder(place);
    return (
        <div className="winner">
            <div className="winner__img-wrapper" style={{ border }}>
                {img ? (
                    <img src={img} alt="" className="winner__img" />
                ) : (
                    <span className="">{name[0] + surname[0]}</span>
                )}
            </div>
            <div className="winner__info">
                <div className="winner__place">{place} место</div>
                <div className="winner__name">{name + ' ' + surname}</div>
                <div className="winner__score">Деревьев посажено - {score}</div>
            </div>
        </div>
    );
};
