import './index.css';
import store from './redux/store-redux'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles} from "./styles/GlobalStyles";
import App from "./App";
import React from "react";
import { Provider } from 'react-redux';



    ReactDOM.render(
        <BrowserRouter>
            <GlobalStyles/>
            <Provider store={store}>
                <App state={store.getState()}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
