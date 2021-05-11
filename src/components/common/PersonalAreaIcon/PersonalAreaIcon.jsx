import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';
import { connect } from 'react-redux';
import { logOut } from '../../../redux/actions';

import logOutImg from './logOut.svg';

let PersonalAreaIcon = ({ name, surname, img, logOut }) => {
    const history = useHistory();
    const handleLogOut = () => {
        logOut();
        history.push('/');
    };
    return (
        <div className="personal-area-icon">
            <Link to="/personal-area" className="personal-area-icon">
                {img ? (
                    <img src={img} alt="" className="personal-area-icon__img" />
                ) : (
                    <div className="personal-area-icon__img-none">{`${name[0]}${surname[0]}`}</div>
                )}
                <span className="personal-area-icon__text">{`${name} ${surname}`}</span>
            </Link>
            <img
                onClick={handleLogOut}
                src={logOutImg}
                alt="log-out"
                className="personal-area-icon__log-out"
            />
        </div>
    );
};

PersonalAreaIcon = connect(null, { logOut })(PersonalAreaIcon);

export { PersonalAreaIcon };
