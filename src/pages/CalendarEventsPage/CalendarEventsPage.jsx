import React from 'react';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { Footer } from '../../components/sections/Footer/Footer.jsx';
import { BreadCrumbs } from '../../components/common/BreadCrumbs/BreadCrumbs';
import { CalendarEventsTabs } from '../../components/sections/CalendarEventsTabs/CalendarEventsTabs';

export const CalendarEventsPage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="main-padding-horizontal calendar-events__bread-crumbs">
                    <BreadCrumbs list={breadCrumbsList} />
                </div>
                <CalendarEventsTabs />
            </main>
            <Footer />
        </>
    );
};
const breadCrumbsList = [
    {
        title: 'Главная',
        link: '/',
    },
    {
        title: 'Календарь событий',
    },
];
