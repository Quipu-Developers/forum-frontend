import React, { useState } from 'react';
import '../style/detail.css';


export default function Detail() {
    // let [title,settitle]=useState(['글제목1,글제목2,글제목3']) //글 제목
    // let [writer,setwriter]=useState(['작성자1,작성자2,작성자3']) //작성자
    // let [writetime,setwritetime]=useState(['2024.6.28,2024.6.30,2024.7.3']) //작성시간
    // let [body,setbody]=useState(['안녕하세요','내용','test']) //글 내용
    let [commentwriter,setcommentwriter]=useState(['작성자']) //글 내용
    let [comment,setcomment]=useState(['문장 사용된다. 연출을 텍스트로, 시각 로렘 무언가를 들어가는 폰트']) //댓글 내용
    let [commentinput,setcommentinput]=useState('') //입력 댓글
    
    return (
        <div className='root'>
            <div className='full-detail'>
                <p className='ListTitle'>자유게시판</p>
                <div className="Container">
                    <div className='Header'>
                        <p className='title'>제목</p>
                        <p className="write-info"><span className='writer'>작성자&ensp;</span> <span className='date'>2024.6.28</span></p>
                    </div>
                    <div className='Content'>
                        <p className='content'>내용</p>
                    </div>
                    <div className='comment-section'>
                        <div className='input-container'>
                            <input className='input-box' onChange={(e)=>{setcommentinput(e.target.value);}} value={commentinput} placeholder="댓글을 입력하세요."/>
                            <button className='comment-button' onClick={(e)=>{
                                if (commentinput.trim() === '') {
                                alert("댓글을 입력하세요.");
                                } else {
                                let copycomment = [...comment];
                                let copycommentwriter = [...commentwriter];
                                copycomment.unshift(commentinput);
                                copycommentwriter.unshift('작성자');
                                setcomment(copycomment);
                                setcommentwriter(copycommentwriter);
                                setcommentinput('');
                                }
                            }}><img src={process.env.PUBLIC_URL + '/jam_write.png'} /></button>
                        </div>
    
                        <div className='comment-list'> {
                            comment.map((element, count) => (
                            <Comment key={count} 
                            index={count} 
                            commentwriter={commentwriter} 
                            setcommentwriter={setcommentwriter}
                            comment={comment} setcomment={setcomment} />
                            ))
                        }
                        </div>
                        <div className='reply-container'>
                            <div className='comment-header'>
                                    <div className='profile'></div>
                                    <div className="author">작성자</div>
                                </div>
                            <div className='comment'>
                                문장 사용된다. 연출을 텍스트로, 시각 로렘 무언가를 들어가는 폰트
                            </div>
                        </div>
                        <div className='reply-input-container'>
                            <div className='input'>대댓글을 입력하세요</div>
                            <div className="button"><img src={process.env.PUBLIC_URL + '/jam_write.png'} /></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
}

function Comment(props) {
    return (
        <div className="comment-container">
            <div className='comment-header'>
                                <div className='profile'></div>
                                <div className="author">{props.commentwriter[props.index]}</div>
                                <div className="reply">대댓글</div>
                            </div>
            <p className='comment'>{props.comment[props.index]}</p>
        </div>
    );
}