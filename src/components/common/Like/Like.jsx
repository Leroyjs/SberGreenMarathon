import React, { useState } from 'react';
import './style.scss';

export const Like = () => {
    const [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(!isActive);
    };
    return (
        <div
            onClick={handleClick}
            className={'like ' + (isActive ? 'like_active' : undefined)}
        >
            <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                className="like__img"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.4454 18.7608L2.57617 10.5663C0.359638 8.2582 0.499218 4.4736 2.87922 2.34929C5.24035 0.241811 8.82044 0.651052 10.6863 3.24171L11 3.67724L11.3137 3.24171C13.1796 0.651052 16.7596 0.241811 19.1208 2.34929C21.5008 4.4736 21.6404 8.2582 19.4238 10.5663L11.5546 18.7608C11.2483 19.0797 10.7517 19.0797 10.4454 18.7608Z"
                    stroke="#D65B84"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="like__text">Мне понравилось</span>
        </div>
    );
};
