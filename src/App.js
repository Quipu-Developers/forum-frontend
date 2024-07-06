import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home';
import List from './component/list';
import Detail from './component/detail';
import Write from './component/write';



function App() {
  return (
    <div className="container">
      
      {/* 네비게이션 내용 추가 */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;