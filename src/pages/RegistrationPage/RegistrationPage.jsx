import React from 'react';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { Footer } from '../../components/sections/Footer/Footer.jsx';
import { RegictrationMain } from '../../components/sections/RegictrationMain/RegictrationMain';

export const RegistrationPage = () => {
    return (
        <>
            <Header />
            <main className="main main-padding-horizontal">
                <RegictrationMain />
            </main>
            <Footer />
        </>
    );
};
