import React from 'react';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { Footer } from '../../components/sections/Footer/Footer.jsx';
import { EventsMap } from '../../components/sections/EventsMap/EventsMap';

export const EventsMapPage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <EventsMap />
            </main>
            <Footer />
        </>
    );
};
