import React from 'react';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { AllNews } from '../../components/sections/AllNews/AllNews';
import { Footer } from '../../components/sections/Footer/Footer.jsx';

export const NewsPage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <AllNews />
            </main>
            <Footer />
        </>
    );
};
