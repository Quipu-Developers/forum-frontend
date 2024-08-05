import React from 'react';
import '../style/gallery.css';

const images = [
    { src: process.env.PUBLIC_URL + '/galleryitem.png', alt: 'Image' },
    { src: process.env.PUBLIC_URL + '/galleryitem.png', alt: 'Image' },
    { src: process.env.PUBLIC_URL + '/galleryitem.png', alt: 'Image' },
    { src: process.env.PUBLIC_URL + '/galleryitem.png', alt: 'Image' },
    { src: process.env.PUBLIC_URL + '/galleryitem.png', alt: 'Image' },
    { src: process.env.PUBLIC_URL + '/galleryitem.png', alt: 'Image' },
    { src: process.env.PUBLIC_URL + '/galleryitem.png', alt: 'Image' },
    { src: process.env.PUBLIC_URL + '/galleryitem.png', alt: 'Image' },
];

export default function Gallery() {
    return (
        <div className='root'>
            <div className='full-gallery'>
                <p className='ListTitle'>갤러리<span className='ps'>MT,세미나,개강총회, 스터디 등 활동별 사진들을 모으기 위한 게시판 입니다.</span></p>
                <div className='gallery-container'>
                    <div className="gallery-grid">
                        {images.map((image, index) => (
                            <GalleryBlock key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const GalleryBlock = ({ src, alt }) => {
    return (
        <div className="gallery-block">
            <img src={src} alt={alt} className="gallery-image" />
        </div>
    );
};
