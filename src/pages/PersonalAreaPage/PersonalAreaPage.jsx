import React from 'react';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { Footer } from '../../components/sections/Footer/Footer.jsx';
import { PersonalAreaMain } from '../../components/sections/PersonalAreaMain/PersonalAreaMain';
import { MyPlantedTrees } from '../../components/sections/MyPlantedTrees/MyPlantedTrees';

export const PersonalAreaPage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <PersonalAreaMain />
                {/* <MyPlantedTrees /> */}
            </main>
            <Footer />
        </>
    );
};
