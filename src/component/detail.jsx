import React, { useState } from 'react';
import '../style/detail.css';


export default function Detail() {
    let [title,settitle]=useState(['글제목1,글제목2,글제목3']) //글 제목
    let [writer,setwriter]=useState(['작성자1,작성자2,작성자3']) //작성자
    let [writetime,setwritetime]=useState(['2024.6.28,2024.6.30,2024.7.3']) //작성시간
    let [body,setbody]=useState(['안녕하세요','내용','test']) //글 내용
    let [commentwriter,setcommentwriter]=useState(['댓글작성자','댓글작성자2','댓글작성자3']) //글 내용
    let [comment,setcomment]=useState(['댓글입니다1','댓글입니다2','댓글입니다3']) //댓글 내용
    let [commentinput,setcommentinput]=useState('') //입력 댓글


    return (
        <div className='root'>
            <div className="navbar"></div>
            <div className='full-detail'>
                <h2 className='ListTitle'>자유(정보)게시판</h2>
                <div className="Container"></div>
                    <p>글 내용</p>
                <div className='commentarea'>
                    <div className='input-container'>
                        <input onChange={(e)=>{setcommentinput(e.target.value);}} value={commentinput} placeholder="댓글을 입력하세요.."/>
                        <button onClick={(e)=>{
                            if (commentinput.trim() === '') {
                            alert("댓글을 입력하세요.");
                            } else {
                            let copycomment = [...comment];
                            let copycommentwriter = [...commentwriter];
                            copycomment.unshift(commentinput);
                            copycommentwriter.unshift(0); //새 작성자 추가??
                            setcomment(copycomment);
                            setcommentwriter(copycommentwriter);
                            setcommentinput('');
                            }
                        }}>📝</button>
                    <div className='comment-container'></div>
                        {
                        comment.map((element, count) => (
                        <Comment key={count} index={count} commentwriter={commentwriter} setcommentwriter={setcommentwriter}
                            comment={comment} setcomment={setcomment} />
                        ))
                    }
                    </div>
                </div>
            </div>
    </div>
    );
}

function Comment(props) {
    return (
        <div className="commentbody">
            <h4>{props.commentwriter[props.index]}</h4>
            <h5>{props.comment[props.index]}</h5>
        </div>
    );
}