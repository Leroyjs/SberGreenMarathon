import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import { connect } from 'react-redux';
import { setStateOfPopUps } from '../../../redux/actions';

const _modalRoot = document.getElementById('modal-root');
const _body = document.body;

let Modal = ({ children, setStateOfPopUps }) => {
    useEffect(() => {
        _body.classList.add('no-scroll');

        return () => {
            _body.classList.remove('no-scroll');
        };
    }, []);

    const handleClose = () => {
        setStateOfPopUps({
            city: false,
            logIn: false,
            info: false,
            resetPassword: false,
            forgotPassword: false,
        });
    };

    return ReactDOM.createPortal(
        <div className="pop-up">
            <div className="pop-up__overlay" onClick={handleClose}></div>
            <div className="pop-up__content">{children}</div>
        </div>,
        _modalRoot
    );
};

Modal = connect(null, { setStateOfPopUps })(Modal);

export { Modal };
