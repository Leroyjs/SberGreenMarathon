import React, { useRef, useEffect, useState } from 'react';
import './style.scss';

import Flickity from 'flickity';

import { TitleH2 } from '../../UI/TitleH2/TitleH2';
import { PhotoItem } from '../../common/PhotoItem/PhotoItem';

import arrowLeft from './media/arrow-left.svg';
import arrowRight from './media/arrow-right.svg';

import img1 from './media/photos/1.jpg';
import img2 from './media/photos/2.jpg';
import img3 from './media/photos/3.jpg';
import img4 from './media/photos/4.jpg';
import img5 from './media/photos/5.jpg';
import img6 from './media/photos/6.jpg';
import img7 from './media/photos/7.jpg';
import img8 from './media/photos/8.jpg';
import img9 from './media/photos/9.jpg';
import img10 from './media/photos/10.jpg';
import img11 from './media/photos/11.jpg';
import img12 from './media/photos/12.jpg';
import img13 from './media/photos/13.jpg';
import img14 from './media/photos/14.jpg';
import img15 from './media/photos/15.jpg';
import img16 from './media/photos/16.jpg';
import img18 from './media/photos/18.jpg';

export const PhotoGallery = () => {
    const _photoGallery = useRef(null);
    const [photoGalleryFlickity, setPhotoGalleryFlickity] = useState(false);
    useEffect(() => {
        setPhotoGalleryFlickity(
            new Flickity(_photoGallery.current, {
                cellAlign: 'left',
                contain: true,
                pageDots: false,
                prevNextButtons: false,
            })
        );
    }, []);

    const handleNext = () => {
        photoGalleryFlickity.next();
    };
    const handlePrev = () => {
        photoGalleryFlickity.previous();
    };

    return (
        <section className="photo-gallery">
            {/* <div className="photo-gallery__circle"></div> */}
            <div className="photo-gallery__title-wrapper main-padding-horizontal">
                <TitleH2 addClasses={['photo-gallery__title']}>
                    Фотогалерея
                </TitleH2>
                <div className="photo-gallery__arrows">
                    <img
                        src={arrowLeft}
                        alt=""
                        className="photo-gallery__arrow photo-gallery__arrow_left"
                        onClick={handlePrev}
                    ></img>
                    <img
                        src={arrowRight}
                        alt=""
                        className="photo-gallery__arrow photo-gallery__arrow_right"
                        onClick={handleNext}
                    ></img>
                </div>
            </div>
            <div
                ref={_photoGallery}
                className="photo-gallery__slider photo-gallery-slider"
            >
                <PhotoItem img={img11} />
                <PhotoItem img={img12} />
                <PhotoItem img={img13} />
                <PhotoItem img={img14} />
                <PhotoItem img={img15} />
                <PhotoItem img={img16} />
                <PhotoItem img={img18} />
                <PhotoItem img={img1} />
                <PhotoItem img={img2} />
                <PhotoItem img={img3} />
                <PhotoItem img={img4} />
                <PhotoItem img={img5} />
                <PhotoItem img={img6} />
                <PhotoItem img={img7} />
                <PhotoItem img={img8} />
                <PhotoItem img={img9} />
                <PhotoItem img={img10} />
            </div>
        </section>
    );
};
