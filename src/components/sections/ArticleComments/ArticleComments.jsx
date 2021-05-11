import React from 'react';
import './style.scss';

import { TitleH3 } from '../../UI/TitleH3/TitleH3';
import { Button } from '../../UI/Button/Button';
import { CommentList } from '../../common/CommentList/CommentList';

export const ArticleComments = () => {
    return (
        <section className="article-comments">
            <TitleH3>Комментарии</TitleH3>
            <Button addClasses={['article-comments__add-comment-button']}>
                Добавить комментарий
            </Button>
            <div className="article-comments__comment-list">
                <CommentList />
            </div>
        </section>
    );
};
