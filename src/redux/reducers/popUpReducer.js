import { SET_STATE_OF_POPUPS, LOGOUT } from '../types';

const initialState = {
    city: false,
    logIn: false,
    info: false,
};

export const popUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE_OF_POPUPS:
            return action.payload;

        default:
            return state;
    }
};
