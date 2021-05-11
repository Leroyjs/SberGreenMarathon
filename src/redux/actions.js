import {
    SET_STATE_OF_POPUPS,
    REG_NEW_ACCOUNT,
    LOGOUT,
    SET_STATE_OF_ACCOUNT,
} from './types.js';

export const setStateOfPopUps = (stateOfPopUps) => {
    return {
        type: SET_STATE_OF_POPUPS,
        payload: stateOfPopUps,
    };
};
export const regNewAccount = (dataAccount) => {
    return {
        type: REG_NEW_ACCOUNT,
        payload: dataAccount,
    };
};
export const setStateOfAccount = (stateOfAccount) => {
    return {
        type: SET_STATE_OF_ACCOUNT,
        payload: stateOfAccount,
    };
};

export const logOut = () => {
    return {
        type: LOGOUT,
    };
};

//SET_STATE_OF_ACCOUNT
