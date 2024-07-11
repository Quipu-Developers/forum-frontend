import React, { useState } from 'react';
import '../style/list.css';

export default function List() {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState(['제목1', '제목2', '제목3']);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddToList = () => {
        if (inputValue.trim()) {
            setList([...list, inputValue]);
            setInputValue(''); // 입력란 초기화
        }
    };

    const handleWhite = () => {
        
    }

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
                        />
                        <button className='add-button' onClick={handleAddToList}>✅</button>
                    </div>
                    <button className='write-botton' onClick={handleWhite}>글쓰기✍️</button>
                </div>
                <div className='freeboard-body'>
                    {list.map((item, index) => (
                        <div key={index} className='Listcomponent'>
                            {item}
                            <div>작성자 2024.6.28</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
