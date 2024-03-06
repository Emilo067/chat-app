import './index.css';
import store from './redux/store-redux'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles} from "./styles/GlobalStyles";
import App from "./App";
import React from "react";
import StoreContext from "./StoreContext";


export const rerenderEntireTree = (state: any) => {


    ReactDOM.render(
        <BrowserRouter>
            <GlobalStyles/>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(()=>{rerenderEntireTree(store.getState())})