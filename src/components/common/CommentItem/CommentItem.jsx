import React from 'react';
import './style.scss';

import { TitleH4 } from '../../UI/TitleH4/TitleH4';
import { Date } from '../../common/Date/Date';
import { Text } from '../../UI/Text/Text';

export const CommentItem = ({ time, date, name, text, imgList }) => {
    return (
        <div className="comment-item">
            <div className="comment-item__header">
                <TitleH4>{name}</TitleH4>
                <Date time={time} date={date} />
            </div>
            <div className="comment-item__body">
                <div className="comment-item__text">
                    <Text>{text}</Text>
                </div>
                <div className="comment-item__img-list">
                    {imgList.map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            alt=""
                            className="comment-item__img"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
