import React, { useRef, useEffect, useState } from 'react';
import './style.scss';

import Flickity from 'flickity';

import { TitleH2 } from '../../UI/TitleH2/TitleH2';
import { PhotoItem } from '../../common/PhotoItem/PhotoItem';

import arrowLeft from './media/arrow-left.svg';
import arrowRight from './media/arrow-right.svg';

// import img1 from './media/photos/1.jpg';
// import img2 from './media/photos/2.jpg';
// import img3 from './media/photos/3.jpg';
// import img4 from './media/photos/4.jpg';
// import img5 from './media/photos/5.jpg';
// import img6 from './media/photos/6.jpg';
// import img7 from './media/photos/7.jpg';
// import img8 from './media/photos/8.jpg';
// import img9 from './media/photos/9.jpg';
// import img10 from './media/photos/10.jpg';
// import img11 from './media/photos/11.jpg';
// import img12 from './media/photos/12.jpg';
// import img13 from './media/photos/13.jpg';
// import img14 from './media/photos/14.jpg';
// import img15 from './media/photos/15.jpg';
// import img16 from './media/photos/16.jpg';
// import img18 from './media/photos/18.jpg';
import img19 from './media/photos/19.jpg';
import img20 from './media/photos/20.jpg';
import img21 from './media/photos/21.jpg';
import img22 from './media/photos/22.jpg';
import img23 from './media/photos/23.jpg';
import img24 from './media/photos/24.jpg';
import img25 from './media/photos/25.jpg';
import img26 from './media/photos/26.jpg';
import img27 from './media/photos/27.jpg';
import img28 from './media/photos/28.jpg';
import img29 from './media/photos/29.jpg';
import img30 from './media/photos/30.jpg';
import img31 from './media/photos/31.jpg';
import img32 from './media/photos/32.jpg';
import img33 from './media/photos/33.jpg';
import img34 from './media/photos/34.jpg';
import img35 from './media/photos/35.jpg';
import img36 from './media/photos/36.jpg';
import img37 from './media/photos/37.jpg';
import img38 from './media/photos/38.jpg';
import img39 from './media/photos/39.jpg';
import img40 from './media/photos/40.jpg';

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
                <PhotoItem img={img19} />
                <PhotoItem img={img20} />
                <PhotoItem img={img21} />
                <PhotoItem img={img22} />
                <PhotoItem img={img23} />
                <PhotoItem img={img24} />
                <PhotoItem img={img25} />
                <PhotoItem img={img26} />
                <PhotoItem img={img27} />
                <PhotoItem img={img28} />
                <PhotoItem img={img29} />
                <PhotoItem img={img30} />
                <PhotoItem img={img31} />
                <PhotoItem img={img32} />
                <PhotoItem img={img33} />
                <PhotoItem img={img34} />
                <PhotoItem img={img35} />
                <PhotoItem img={img36} />
                <PhotoItem img={img37} />
                <PhotoItem img={img38} />
                <PhotoItem img={img39} />
                <PhotoItem img={img40} />
            </div>
        </section>
    );
};
