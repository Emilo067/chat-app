import './index.css';
import store from './redux/store-redux'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles} from "./styles/GlobalStyles";
import App from "./App";
import React from "react";


export const rerenderEntireTree = (state: any) => {


    ReactDOM.render(
        <BrowserRouter>
            <GlobalStyles/>
            <App state={state} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(()=>{rerenderEntireTree(store.getState())})