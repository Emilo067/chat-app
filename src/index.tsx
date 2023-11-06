import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyles} from "./styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import {addPost, state} from './redux/state'




ReactDOM.render(
    <BrowserRouter>
        <GlobalStyles/>
        <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root')
);