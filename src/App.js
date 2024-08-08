import './App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './page/home';
import FreeList from './page/freeboard/list';
import InfoList from './page/infoboard/list';
import CodingList from './page/codingboard/list';
import GalleryList from './page/gallery/list';
import FreeDetail from './page/freeboard/detail';
import InfoDetail from './page/infoboard/detail';
import CodingDetail from './page/codingboard/detail';
import FreeWrite from './page/freeboard/write';
import InfoWrite from './page/infoboard/write';
import CodingWrite from './page/codingboard/write';
import GalleryWrite from './page/gallery/write';
import Detail from './component/detail.jsx';



import { LoginModal, RegisterModal } from './component/loginModal';

function AppComponent() {

  // 로그인, 회원가입 모달창 제어
  const [activeLoginModal, setActiveLoginModal] = useState(false);
  const [activeRegisterModal, setActiveRegisterModal] = useState(false);

  const handleActiveLoginModal = () => {
    setActiveLoginModal(!activeLoginModal);
  }
  const handleActiveRegisterModal = () => {
    setActiveRegisterModal(!activeRegisterModal);
  }

  const handleLoginClose = () => {
    setActiveLoginModal(false);
  }

  const handleRegisterClose = () => {
    setActiveRegisterModal(false);
  }


  // 현재 경로 일치여부
  const location = useLocation();
  const isFreePage = location.pathname === '/free';
  const isInfoPage = location.pathname === '/info';
  const isCodingPage = location.pathname === '/coding';
  const isGalleryPage = location.pathname === '/gallery';


  return (
    <div className="container">

      {/* 로그인, 회원가입 모달창 */}
      {activeLoginModal && <LoginModal handleLoginClose={handleLoginClose} />}
      {activeRegisterModal && <RegisterModal handleRegisterClose={handleRegisterClose} />}

      {/* PC 네비게이션 바 */}
      <nav className="navbar">
        <div className="navbar__logo">
          <div className="navbar__login">
            <p onClick={() => handleActiveLoginModal()}>로그인</p>
            <p onClick={() => handleActiveRegisterModal()}>회원가입</p>
          </div>
          <div className="navbar__quipu">
            <Link to="/">QUIPU</Link>
          </div>
        </div>

        <div className="navbar__menu">
          <ul>
            <li><Link to="/free"
              style={{ backgroundColor: isFreePage ? 'rgba(249,243,204,1)' : 'white' }}
            >자유 게시판</Link></li>
            <li><Link to="/info"
              style={{ borderLeft: 'none', backgroundColor: isInfoPage ? 'rgba(249,243,204,1)' : 'white' }}
            >정보 게시판</Link></li>
            <li><Link to="/coding"
              style={{ borderLeft: 'none', backgroundColor: isCodingPage ? 'rgba(249,243,204,1)' : 'white' }}
            >코딩 게시판</Link></li>
            <div className="navbar__menu--gallery">
              <li><Link to="/gallery"
                style={{ borderLeft: 'none', backgroundColor: isGalleryPage ? 'rgba(249,243,204,1)' : 'white' }}>갤러리</Link></li>
            </div>
          </ul>
        </div>
      </nav>

      {/* 라우팅 */}
      <div className="content-container">
        <Routes>
          {/* 홈페이지 */}
          <Route path="/" element={<Home />} />
          {/* 게시판 리스트 페이지 */}
          <Route path="/free" element={<FreeList />} />
          <Route path="/info" element={<InfoList />} />
          <Route path="/coding" element={<CodingList />} />
          <Route path="/gallery" element={<GalleryList />} />
          {/* 게시판 디테일 페이지 */}
          <Route path="/free/detail" element={<FreeDetail />} />
          <Route path="/info/detail" element={<InfoDetail />} />
          <Route path="/info/detail/:postId" element={<Detail />} />
          <Route path="/coding/detail" element={<CodingDetail />} />
          <Route path="/coding/detail/:postId" element={<Detail />} />
          {/* 게시판 글쓰기 페이지 */}
          <Route path="/free/write" element={<FreeWrite />} />
          <Route path="/info/write" element={<InfoWrite />} />
          <Route path="/coding/write" element={<CodingWrite />} />
          <Route path="/gallery/write" element={<GalleryWrite />} />
        </Routes>
      </div>

    </div>
  );
}

function App() {
  return (
    <Router>
      <AppComponent />
    </Router>
  )
}

export default App;