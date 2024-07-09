import React from 'react';
import '../style/home.css';

function HomeRecent() {
    return (
        <div className="home__recent">
            <div className="home__recent-title">
                <h4>최근 게시글</h4>
                <div className="home_recent-title-icon">
                    <p>●</p>
                    <p>●</p>
                    <p>●</p>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="home-container">
            <div className="home">
                <HomeRecent />                
            </div>
        </div>
    )
}