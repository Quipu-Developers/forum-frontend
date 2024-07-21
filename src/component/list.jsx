import React, { useState } from 'react';
import '../style/list.css';
import Pagination from './pagination';

export default function List() {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState(['제목1', '제목2', '제목3']);
    const [pageCount, setPageCount] = useState(3); // 페이지 수 설정
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const activeEnter = (event) => {
        if (event.key === 'Enter') {
            setInputValue(event.target.value);
            handleAddToList();
        }

    }

    const handleAddToList = () => {
        if (inputValue.trim()) {
            setList([...list, inputValue]);
            setInputValue(''); // 입력란 초기화
        }
    };

    const handleWhite = () => {

    }
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        // 페이지 변경 시 필요한 로직 추가
    };

    return (
        <div className="list-container">
            <div className='freeboard'>
                <h1 className='freeboard-title'>자유게시판</h1>
                <div className='freeboard-header'>
                    <div className='search-container'>
                        <input
                            className='search-box'
                            placeholder='검색어를 입력하세요'
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={activeEnter}
                        />
                        <button className='add-button' onClick={handleAddToList}></button>
                    </div>
                    <button className='write-botton' onClick={handleWhite}>글쓰기<div className='write-button-image' /></button>
                </div>
                <div className='freeboard-body'>
                    {list.map((item, index) => (
                        <div key={index} className='Listcomponent'>
                            {item}
                            <div>작성자 2024.6.28</div>
                        </div>
                    ))}
                    {pageCount > 0 && (
                        <Pagination
                            pageCount={Math.max(1, pageCount - 1)}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
