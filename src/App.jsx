import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MainPage} from './pages/MainPage/MainPage.jsx';
import {ArticlePage} from './pages/ArticlePage/ArticlePage';
import {NewsPage} from './pages/NewsPage/NewsPage';
import {RegistrationPage} from './pages/RegistrationPage/RegistrationPage';
import {PersonalAreaPage} from './pages/PersonalAreaPage/PersonalAreaPage';
import {RootPopUp} from './components/modals/RootPopUp';
import {EventsMapPage} from './pages/EventsMapPage/EventsMapPage';
import {PlantedTreePage} from './pages/PlantedTreePage/PlantedTreePage';
import {CalendarEventsPage} from './pages/CalendarEventsPage/CalendarEventsPage';
import {AboutPage} from './pages/AboutPage/AboutPage';
import {PlantedTree} from './components/common/PlantedTree/PlantedTree';
import {ResetPassword} from './pages/ResetPassword/ResetPassword';

import {connect} from 'react-redux';

let App = ({ token }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <MainPage />} />
                <Route exact path="/news/:page?" render={() => <NewsPage />} />
                <Route
                    exact
                    path="/news/article/:id"
                    render={() => <ArticlePage />}
                />
                <Route
                    exact
                    path="/registration"
                    render={() => <RegistrationPage />}
                />
                <Route
                    exact
                    path="/personal-area"
                    render={() => <PersonalAreaPage />}
                />
                <Route
                    exact
                    path="/events-map"
                    render={() => <EventsMapPage />}
                />
                <Route
                    exact
                    path="/planted-tree"
                    render={() => <PlantedTreePage />}
                />
                <Route
                    exact
                    path="/calendar-of-events"
                    render={() => <CalendarEventsPage />}
                />
                <Route
                    path="/reset-password/:token?"
                    render={() => <ResetPassword />}
                />
                <Route path="/about/:city?" render={() => <AboutPage />} />
            </Switch>
            {token && <PlantedTree />}
            <RootPopUp />
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => {
    return {
        token: state.account.token,
    };
};
App = connect(mapStateToProps, null)(App);

export { App };
export const mockImg = [
    'https://vbudushee.ru/upload/iblock/fe5/3321ctowmqewp3k4dcic0ytch2gdl7kv/%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%97%D0%9C.png',
    'https://static.irk.ru/media/img/site/gallery/30624/8e26a344-17e9-4304-a37b-c6be50fab0bf_jpg_800x1000_q85.jpg',
    'https://marathonec.ru/wp-content/uploads/2019/06/green-marathon-running-hearts-1.jpg'
]
