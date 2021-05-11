import React from 'react';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { Footer } from '../../components/sections/Footer/Footer.jsx';
import { PlantedTreeMain } from '../../components/sections/PlantedTreeMain/PlantedTreeMain';

export const PlantedTreePage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <PlantedTreeMain />
            </main>
            <Footer />
        </>
    );
};
