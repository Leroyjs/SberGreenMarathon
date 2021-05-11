import React from 'react';
import './style.scss';

import { Header } from '../../components/sections/Header/Header.jsx';
import { ArticleMain } from '../../components/sections/ArticleMain/ArticleMain';
import { Footer } from '../../components/sections/Footer/Footer.jsx';
import { ArticleComments } from '../../components/sections/ArticleComments/ArticleComments';

export const ArticlePage = () => {
    return (
        <>
            <Header />
            <main className="main main-padding-horizontal">
                <ArticleMain />
                {/* <ArticleComments /> */}
            </main>
            <Footer />
        </>
    );
};
