import React from 'react';
import '../style/home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-main">
                <div className="home-main-row1">
                    <HomeRecent />
                    <HomeNotice />
                </div>
                <div className="home-main-row2">
                    <HomeGallery />
                    <HomeFAQ />
                </div>
            </div>

            <div className="home-footer">
                <div className="home-footer-content">
                    <p>카카오톡&nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>click👉</span>&nbsp;<a href="https://open.kakao.com/o/sO45q17f">포럼 문의 사항</a>
                    </p>
                    <p>인스타그램&nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>click👉</span>&nbsp;<a href="https://www.instagram.com/uos_quipu?igsh=MTVjZTFhaXl6NGRoZQ==">@uos_quipu</a>
                    </p>
                    <br></br>
                    <p>Copyright 2024.QUIPU. All rights reserved.</p>
                    <p>Study icon designed by Flaticon(Freepik)</p>
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

function HomeFAQ() {
    return (
        <div className="home__FAQ">
            <div className="home__FAQ-title">
                <h4>자주 묻는 질문</h4>
                <div className="home__FAQ-title-icon">
                    <p>●</p>
                    <p>●</p>
                    <p>●</p>
                </div>
            </div>
            <div className="home__FAQ-list">
                <p><span>[Q]</span>질문1</p>
                <p><span>[Q]</span>질문2</p>
                <p><span>[Q]</span>질문3</p>
                <p><span>[Q]</span>질문4</p>
            </div>
        </div>

    )
}