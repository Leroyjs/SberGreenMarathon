import React from 'react';
import './style.scss';

export const CloseButton = ({ handler }) => {
    return (
        <svg
            onClick={handler}
            className="close-button"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 15L15 1M1 1L15 15L1 1Z"
                stroke="#616E7C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
