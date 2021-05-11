import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './libs/flickity.css';
import './index.scss';
import { App } from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
