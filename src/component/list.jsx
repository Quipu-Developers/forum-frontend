import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/list.css';
import Pagination from './pagination';
import {board_post_data} from '../data/board_post_data.jsx';
import Detail from './detail.jsx';

export default function List() {
    const navigate = useNavigate(); // useNavigate 호출
    const [index, setIndex] = useState(0);
    const [pageCount, setPageCount] = useState(3); // 페이지 수 설정
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정

    const [userInput, setUserInput] = useState('');
    const [titles, setTitles] = useState(board_post_data);

    const onChange_UserInput = (event) => {
        setUserInput(event.target.value);
    };
    
    const activeEnter = (event) => {
        if (event.key === 'Enter') {
            setUserInput(event.target.value);
        }
    }

    useEffect(() => {
        const filterTitle = board_post_data.filter((item)=> { return item.title.toLowerCase().includes(userInput.toLowerCase())})
        if (filterTitle !== null){
            setTitles(filterTitle)
        }
        else{
            setTitles(null)
        }
        console.log(titles)
    },[userInput])

    const handleWhite = () => {

    }
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        // 페이지 변경 시 필요한 로직 추가
    };

    const handleDetailPage = (postId) => {
        navigate(`/info/detail/${postId}`); // postId와 함께 Detail 페이지로 이동
    };

    return (
        <div className="list-container">
            <div className='freeboard'>
                <h1 className='freeboard-title'>정보게시판</h1>
                <div className='freeboard-header'>
                    <div className='search-container'>
                        <input
                            className='search-box'
                            type="search"
                            placeholder='검색어를 입력하세요'
                            value={userInput}
                            onChange = {onChange_UserInput}
                            onKeyDown = {activeEnter}
                        />
                        <button className='add-button' onClick={onChange_UserInput} ></button>
                    </div>
                    <button className='write-botton' onClick={handleWhite}>글쓰기<div className='write-button-image' /></button>
                </div>
                <div className='freeboard-body'>
                {titles.map((item, index) => (
                        <Listcomponent 
                            key={item.post_id}
                            postTitle={item.title} 
                            userName={item.user_name}
                            postTime={item.post_time}
                            onClick={() => handleDetailPage(item.post_id)}
                        />
                    ))}

                    {/* 페이지네이션 */}
                    <div className='page-naviation'>
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
        </div>
    );
}

function Listcomponent({ postTitle, userName, postTime, onClick}) {
    return (
        <div className='Listcomponent' onClick={onClick}>
            <div>{postTitle} </div>
            <div className='name-time'>
            <div>{userName}</div>
            <div>{postTime}</div>
            </div>
        </div>
    );
}