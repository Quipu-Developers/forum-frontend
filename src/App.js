import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './page/home';
import List from './component/list';
import Detail from './component/detail';
import Write from './component/write';




function AppComponent() {

  const location=useLocation();

  const isListPage=location.pathname==='/list';
  const isDetailPage=location.pathname==='/detail';
  const isWritePage=location.pathname==='/write';
  const isGalleryPage=location.pathname==='/gallery';

  return (
    <div className="container">
      
      {/* 네비게이션 내용 추가 */}
      <div>

      {/* <Router> */}
        <nav className="navbar">

          <div className="navbar__logo">
            <div className="navbar__login">
              <p>로그인</p>
              <p>회원가입</p>
            </div>
            <div className="navbar__quipu">
              <h1>QUIPU</h1>
            </div>
          </div>

          <div className="navbar__menu">
            <ul>
              <li><Link to="/list"
                style={{backgroundColor:isListPage?'rgba(249,243,204,1)':'white'}}
                >자유 게시판</Link></li>
              <li><Link to="/detail"
                style={{backgroundColor:isDetailPage?'rgba(249,243,204,1)':'white'}}
                >정보 게시판</Link></li>
              <li><Link to="/write"
                style={{backgroundColor:isWritePage?'rgba(249,243,204,1)':'white'}}
                >코딩 게시판</Link></li>
              <div className="navbar__menu--gallery">
                <li><Link to="/gallery" 
                style={{backgroundColor:isGalleryPage?'rgba(249,243,204,1)':'white'}}>갤러리</Link></li>
              </div>
            </ul>
          </div>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      {/* </Router> */}
      </div>
      
    </div>
  );
}

function App(){
  return (
    <Router>
      <AppComponent/>
    </Router>
  )
}

export default App;