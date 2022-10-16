import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';
import css from './index.css';
import {setUpStore} from "./redux";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setUpStore();

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

