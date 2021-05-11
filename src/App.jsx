import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage.jsx';
import { ArticlePage } from './pages/ArticlePage/ArticlePage';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { PersonalAreaPage } from './pages/PersonalAreaPage/PersonalAreaPage';
import { RootPopUp } from './components/modals/RootPopUp';
import { EventsMapPage } from './pages/EventsMapPage/EventsMapPage';
import { PlantedTreePage } from './pages/PlantedTreePage/PlantedTreePage';
import { CalendarEventsPage } from './pages/CalendarEventsPage/CalendarEventsPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { PlantedTree } from './components/common/PlantedTree/PlantedTree';
import { ResetPassword } from './pages/ResetPassword/ResetPassword';

import { connect } from 'react-redux';

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
                <Route exact path="/about" render={() => <AboutPage />} />
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
