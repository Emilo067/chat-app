import './index.css';
import store from './redux/state'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles} from "./styles/GlobalStyles";
import App from "./App";
import React from "react";


export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <GlobalStyles/>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())


store.subscribe(rerenderEntireTree)