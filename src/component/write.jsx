import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/write.css';

export default function Write() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [file, setFile] = useState(null);
    const [code, setCode] = useState('');
    const [showCodeInput, setShowCodeInput] = useState(false); // 코드 입력란 표시 상태

    const bodyRef = useRef(null);
    const codeRef = useRef(null);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const handleClick = () => {
        if (!title.trim() || !body.trim()) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }
        // 데이터 서버 전송 로직 추가
    };

    const handleCancel = () => {
        navigate('/free'); 
    };

    const handleAddCode = () => {
        setShowCodeInput(!showCodeInput); // 코드 입력란 on/off 토글
    };

    // 자동 높이 조절을 위한 useEffect
    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.style.height = 'auto';
            bodyRef.current.style.height = bodyRef.current.scrollHeight + 'px';
        }
    }, [body]);

    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.style.height = 'auto';
            codeRef.current.style.height = codeRef.current.scrollHeight + 'px';
        }
    }, [code]);

    return (
        <div className='write-container'>
            <div className='write-input-container'>
                <h1 className='write-title'>코딩 게시판 글쓰기</h1>
                <div className='write-input'>
                    <b>제목</b>
                    <div className='write-code'>
                        <input 
                            className='write-input-title' 
                            type='text' 
                            placeholder='제목을 입력하세요' 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <button
                            className='write-code-button'
                            type='button'
                            onClick={handleAddCode}
                        >
                            코드 첨부
                        </button>
                    </div>
                    <b>내용</b>
                    <textarea
                        className='write-input-body'
                        placeholder='내용을 입력하세요'
                        value={body}
                        ref={bodyRef} 
                        onChange={(e) => setBody(e.target.value)}
                    />
                    {showCodeInput && (
                        <textarea
                            className='write-code-input'
                            placeholder='코드를 입력하세요'
                            value={code}
                            ref={codeRef} 
                            onChange={(e) => setCode(e.target.value)}
                        />
                    )}
                    <b>파일첨부</b>
                    <input
                        className='write-input-file'
                        type='file'
                        onChange={handleFile}
                    />
                    <div className='write-action-buttons'>
                        <button
                            className='write-enroll-button'
                            type='button'
                            onClick={handleClick}
                        >
                            등록
                        </button>
                        <button
                            className='write-cancel-button'
                            type='button'
                            onClick={handleCancel}
                        >
                            취소
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
