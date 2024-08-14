import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/list.css';
import Pagination from './pagination';
import {board_post_data} from '../data/board_post_data.jsx';
import { board_comment_data } from '../data/board_comment_data.jsx';

export default function List({ boardType }) {
    const navigate = useNavigate();
    const itemsPerPage = 5;
    const pageCount = Math.ceil(board_post_data.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [titles, setTitles] = useState(board_post_data);

    const onChange_UserInput = (event) => {
        setUserInput(event.target.value);
    };

    const activeEnter = (event) => {
        if (event.key === 'Enter') {
            setUserInput(event.target.value);
        }
    };

    useEffect(() => {
        const filteredData = board_post_data.filter((item) => {
            return item.board_type === boardType && item.title.toLowerCase().includes(userInput.toLowerCase().trim());
        });
        setTitles(filteredData);
    }, [userInput, boardType]);

    const handleWrite = () => {
        navigate('/info/write');
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleDetailPage = (postId) => {
        const chosen_post_data = board_post_data.find(item => item.post_id === postId) || null;
        const chosen_comment_data = board_comment_data.filter(comment => comment.post_id === postId);
        const comment_id_length = board_comment_data.length;        //전체 댓글 데이터 길이-> 댓글 ID 생성시 사용

        let path;
        switch (boardType) {
            case '자유게시판':
                path = `/free/detail/?postId=${postId}`;        //쿼리 스트링: path?키1=값1&키2=값2&키3=값3
                break;
            case '정보게시판':
                path = `/info/detail/?postId=${postId}`;
                break;
            case '코딩게시판':
                path = `/coding/detail/?postId=${postId}`;
                break;
            case 'gallery':
                path = `/gallery/detail/?postId=${postId}`;
                break;
            default:
                path = `/`;
        }

        navigate(path, { state: { chosen_comment_data, chosen_post_data, comment_id_length } });
    };

    const currentItems = titles.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
                            onChange={onChange_UserInput}
                            onKeyDown={activeEnter}
                        />
                        <button className='add-button' onClick={onChange_UserInput}></button>
                    </div>
                    <button className='write-button' onClick={handleWrite}>글쓰기<div className='write-button-image' /></button>
                </div>
                <div className='freeboard-body'>
                    {currentItems.map((item) => (
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
                                pageCount={pageCount}
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