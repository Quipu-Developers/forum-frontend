import React from 'react';
import '../style/home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="home">
                <div className="home-row1">
                    <HomeRecent />
                    <HomeNotice />
                </div>
                <div className="home-row2">
                    <HomeGallery />
                </div>
                <div className="home-row3">
                    <HomeGallery />
                </div>
            </div>
        </div>
    )
}

function HomeRecent() {
    return (
        <div className="home__recent">
            <div className="home__recent-title">
                <h4>최근 게시글</h4>
                <div className="home__recent-title-icon">
                    <p>●</p>
                    <p>●</p>
                    <p>●</p>
                </div>
            </div>
            <div className="home__recent-list">
                <p><span>[코딩]</span>제목</p>
                <p><span>[정보]</span>제목</p>
                <p><span>[자유]</span>제목이 길 경우 ...</p>
                <p><span>[자유]</span>제목</p>
            </div>
        </div>
    )
}

function HomeNotice() {
    return (
        <div className="home__notice">
            <div className="home__notice-title">
                <h4>공지사항</h4>
                <div className="home__notice-title-icon">
                    <p>●</p>
                    <p>●</p>
                    <p>●</p>
                </div>
            </div>
            <div className="home__notice-list">
                <p><span>[중요]</span>퀴푸공지 ABCDEFG</p>
                <p><span>[중요]</span>공지사항</p>
                <p>공지한다 블라블라 어쩌구저쩌구</p>
                <p>공지끝남</p>
            </div>
        </div>
    )
}

function HomeGallery() {
    return (
        <div className="home__gallery">
            <div className="home__gallery-title">
                <h4>갤러리</h4>
                <div className="home__gallery-title-icon">
                    <p>●</p>
                    <p>●</p>
                    <p>●</p>
                </div>
            </div>
            <div className="home__gallery-list">
                <div className="home__gallery-list-container">
                    <div className="home__gallery-list-imgcontainer">
                        <img />
                    </div>
                    <p style={{ marginTop: '10px' }}>제목</p>
                </div>
                <div className="home__gallery-list-container">
                    <div className="home__gallery-list-imgcontainer">
                        <img />
                    </div>
                    <p style={{ marginTop: '10px' }}>제목</p>
                </div>
                <div className="home__gallery-list-container">
                    <div className="home__gallery-list-imgcontainer">
                        <img />
                    </div>
                    <p style={{ marginTop: '10px' }}>제목</p>
                </div>
                <div className="home__gallery-list-container">
                    <div className="home__gallery-list-imgcontainer">
                        <img />
                    </div>
                    <p style={{ marginTop: '10px' }}>제목</p>
                </div>
            </div>
        </div>
    )
}