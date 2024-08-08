import '../style/write.css';
import { useState, useRef } from 'react'

export default function Write() {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [file,setFile] = useState(null);

    const bodyRef = useRef();

    const handleResizeHeight = () => {
        if (bodyRef.current) {
            bodyRef.current.style.height = 'auto';
            bodyRef.current.style.height = bodyRef.current.scrollHeight + 'px';
        }
    };

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleClick = (e) => {

    }

    return (
        <div className='write-container'>
            <div className='write-input-container'>
                <h1 className='write-title'>
                    정보 게시판 글쓰기
                </h1>
                <div className='write-input'>
                    <b>제목</b>
                    <input 
                        className='write-input-title' 
                        type='text' placeholder='제목을 입력하세요' 
                        value={title} 
                        onChange={ (e) => setTitle(e.target.value) } 
                    />
                    <b>내용</b>
                    <textarea 
                        className='write-input-body' 
                        placeholder='내용을 입력하세요' 
                        value={body} ref={bodyRef} 
                        onChange={(e) => {setBody(e.target.value); handleResizeHeight(e.target.value);} } 
                    />
                    <b>파일첨부</b>
                    <input 
                        className='write-input-file' 
                        type='file' 
                        onChange={handleFile}
                    />
                    <span className='write-enroll'>
                        <button
                            className='write-enroll-button'
                            type='button'
                            onClick={handleClick}
                        >
                            등록
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}