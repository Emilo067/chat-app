import './index.css';
import store from './redux/state'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles} from "./styles/GlobalStyles";
import App from "./App";
import React from "react";


export const rerenderReactTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <GlobalStyles/>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderReactTree(store.getState())


store.subscribe(rerenderReactTree)