import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import HeaderContainer from "./layout/header/HeaderContainer";
import Login from "./common/components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./redux/store-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./common/components/Preloader/Preloader";
import {GlobalStyles} from "./styles/GlobalStyles";

type Props = {
    state: any
    initializeApp?: () => void
    initialized: boolean
}

const DialogsContainer = lazy(() => import('./layout/content/dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./layout/content/profile/ProfileContainer'))
const News = lazy(() => import('./layout/content/news/News'))
const Music = lazy(() => import('./layout/content/music/Music'))
const Settings = lazy(() => import('./layout/content/settings/Settings'))
const UsersContainer = lazy(() => import('./layout/content/Users/UsersContainer'))

class App extends React.Component<Props> {

    componentWillMount() {
        if (this.props.initializeApp) {
            this.props.initializeApp()
        }
    }

    render() {
        let {state} = this.props;

        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar sidebarData={state.sidebar}/>

                <div className={"app-wrapper-content"}>

                    <Suspense fallback={<h1 style={{color: 'red'}}>LOADING....</h1>}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                        <Route path={'/profile/:userId?'} element={<ProfileContainer/>}/>
                        <Route path={'/dialogs/*'}
                               element={<DialogsContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                    </Routes>
                    </Suspense>

                </div>

            </div>

        );
    }
}

type MapStateToProps = {
    initialized: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <GlobalStyles/>
        <Provider store={store}>
            <AppContainer state={store.getState()}/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
