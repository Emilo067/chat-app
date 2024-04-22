import React, {FC} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import {News} from "./layout/content/news/News";
import {Music} from "./layout/content/music/Music";
import {Settings} from "./layout/content/settings/Settings";
import DialogsContainer from "./layout/content/dialogs/DialogsContainer";
import UsersContainer from "./layout/content/Users/UsersContainer";
import ProfileContainer from "./layout/content/profile/ProfileContainer";
import HeaderContainer from "./layout/header/HeaderContainer";
import Login from "./common/components/Login/LoginContainer";

type AppPropsType = {
    state: any
}

const App: FC<AppPropsType> = ({state}) => {
    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar sidebarData={state.sidebar}/>

            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile/:userId?'} element={<ProfileContainer/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>

            </div>

        </div>

    );
}


export default App;
