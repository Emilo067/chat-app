import React, {FC} from 'react';
import './App.css';
import Header from "./layout/header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Profile from "./layout/content/profile/Profile";
import {News} from "./layout/content/news/News";
import {Music} from "./layout/content/music/Music";
import {Settings} from "./layout/content/settings/Settings";
import DialogsContainer from "./layout/content/dialogs/DialogsContainer";

type AppPropsType = {
    store: any
    state: any
}

const App: FC<AppPropsType> = ({store}) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar sidebarData={store.getState().sidebar}/>

            <div className={"app-wrapper-content"}>

                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile store={store}/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer store={store}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>

            </div>

        </div>

    );
}


export default App;
