// src/component/Gallery.jsx
import React from 'react';
import '../style/gallery.css';
import { images } from '../data/gallery_image.jsx';

export default function Gallery() {
    return (
        <div className='root'>
            <div className='full-gallery'>
                <p className='ListTitle'>갤러리<span className='ps'>MT, 세미나, 개강총회, 스터디 등 활동별 사진들을 모으기 위한 게시판 입니다.</span></p>
                <div className='gallery-container'>
                    <div className="gallery-grid">
                        {images.map((image, index) => (
                            <GalleryBlock
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                Image_id={image.Image_id}
                                title={image.title}
                                writer={image.writer}
                                date={image.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const GalleryBlock = ({ src, alt, Image_id, title, writer, date }) => {
    return (
        <div className='block-container'>
            <div className="gallery-block">
                <img src={src} alt={alt} className="gallery-image" />
            </div>
            <div className='image-info'>
                <p className='title'>{title}</p>
                <p className="write-info">
                    <p className='writer'>{writer}</p>
                    <p className='date'>{date}</p>
                </p>
            </div>
        </div>
    );
};
