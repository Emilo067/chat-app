import React, {FC} from 'react';
import './App.css';
import Header from "./layout/header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/state";
import Navbar from "./layout/navbar/Navbar";
import Profile from "./layout/content/profile/Profile";
import Dialogs from "./layout/content/dialogs/Dialogs";
import {News} from "./layout/content/news/News";
import {Music} from "./layout/content/music/Music";
import {Settings} from "./layout/content/settings/Settings";

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const App: FC<AppPropsType> = ({state, addPost, updateNewPostText}) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar sidebarData={state.sidebar}/>

            <div className={"app-wrapper-content"}>

                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile updateNewPostText={updateNewPostText} postData={state.profilePage} addPost={addPost}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs dialogsData={state.dialogsPage}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>

            </div>

        </div>

    );
}


export default App;
