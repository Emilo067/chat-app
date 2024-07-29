import React, {lazy, Suspense} from 'react';
import './App.css';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Header from "../layout/header/Header";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./store/store-redux";
import {initializeApp} from "../redux/app-reducer";
import {Preloader} from "../common/components/Preloader/Preloader";
import {GlobalStyles} from "./styles/GlobalStyles";
import Profile from "../layout/content/profile/ui/profile/profile";
import {ErrorPage} from "../common/components/error-page/error-page";
import MatrixBackground from "../common/components/particle/MatrixBG";
import {Login} from "../common/components/Login/Login";

type Props = {
    state: any
    initializeApp?: () => void
    initialized: boolean
}

const DialogsContainer = lazy(() => import('../layout/content/dialogs/DialogsContainer'))
const Music = lazy(() => import('../layout/content/music/Music'))
const Settings = lazy(() => import('../layout/content/settings/Settings'))
const UsersContainer = lazy(() => import('../layout/content/Users/UsersContainer'))

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
                <MatrixBackground timeout={50}/>
                <Header/>
                <Navbar sidebarData={state.sidebar}/>

                <div className={"app-wrapper-content"}>

                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                            <Route path={'/profile/:userId?'} element={<Profile/>}/>
                            <Route path={'/dialogs/*'}
                                   element={<DialogsContainer/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/settings'} element={<Settings/>}/>
                            <Route path={'/users'} element={<UsersContainer/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                            <Route path={'/*'} element={<ErrorPage/>}/>
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
    return <HashRouter>
        <GlobalStyles/>
        <Provider store={store}>
            <AppContainer state={store.getState()}/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
