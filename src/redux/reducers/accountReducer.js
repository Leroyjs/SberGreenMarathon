import { REG_NEW_ACCOUNT, LOGOUT, SET_STATE_OF_ACCOUNT } from '../types';

let initialState = {
    token: false,
    name: false,
    surname: false,
    email: false,
    city: false,
    password: false,
    img: false,
};

if (localStorage.account) {
    initialState = JSON.parse(localStorage.account);
}

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case REG_NEW_ACCOUNT:
            localStorage.account = JSON.stringify(action.payload);
            return action.payload;
        case SET_STATE_OF_ACCOUNT:
            localStorage.account = JSON.stringify(action.payload);
            return action.payload;
        case LOGOUT:
            localStorage.account = '';
            return {
                token: false,
                name: false,
                surname: false,
                email: false,
                city: false,
                password: false,
                img: false,
            };
        default:
            return state;
    }
};
