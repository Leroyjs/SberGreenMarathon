import { combineReducers } from 'redux';
import { popUpReducer } from './reducers/popUpReducer';
import { accountReducer } from './reducers/accountReducer';

export const rootReducer = combineReducers({
    popUps: popUpReducer,
    account: accountReducer,
});
