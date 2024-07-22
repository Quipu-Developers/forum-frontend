import React, { useState } from 'react';
import '../style/detail.css';

export default function Detail() {
    let [comments, setComments] = useState([
        { id: 1, writer: '작성자', text: '문장 사용된다. 연출을 텍스트로, 시각 로렘 무언가를 들어가는 폰트', replies: [] }
    ]);
    let [commentInput, setCommentInput] = useState('');

    const handleReplySubmit = (commentId, replyText) => {
        let newComments = comments.map(comment => {
            if (comment.id === commentId) {
                return { ...comment, replies: [...comment.replies, replyText] };
            }
            return comment;
        });
        setComments(newComments);
    };

    return (
        <div className='root'>
            <div className='full-detail'>
                <p className='ListTitle'>자유게시판</p>
                <div className="Container">
                    <div className='Header'>
                        <div className='back'><img src={process.env.PUBLIC_URL + '/_-.png'} alt="write" /></div>
                        <div className='info'>
                            <p className='title'>제목</p>
                            <p className="write-info"><span className='writer'>작성자&ensp;</span> <span className='date'>2024.6.28</span></p>
                        </div>
                    </div>
                    <div className='Content'>
                        <p className='content'>내용</p>
                    </div>
                    <div className='comment-section'>
                        <div className='input-container'>
                            <input className='input-box' onChange={(e) => { setCommentInput(e.target.value); }} value={commentInput} placeholder="댓글을 입력하세요." />
                            <button className='comment-button' onClick={() => {
                                if (commentInput.trim() === '') {
                                    alert("댓글을 입력하세요.");
                                } else {
                                    let newComment = {
                                        id: comments.length + 1,
                                        writer: '작성자',
                                        text: commentInput,
                                        replies: []
                                    };
                                    setComments([newComment, ...comments]);
                                    setCommentInput('');
                                }
                            }}><img src={process.env.PUBLIC_URL + '/jam_write.png'} alt="write" /></button>
                        </div>

                        <div className='comment-list'>
                            {comments.map((comment) => (
                                <Comment
                                    key={comment.id}
                                    comment={comment}
                                    handleReplySubmit={handleReplySubmit}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Comment({ comment, handleReplySubmit }) {
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [replyInput, setReplyInput] = useState('');

    return (
        <>
            <div className="comment-container">
                <div className='comment-header'>
                    <div className='profile'></div>
                    <div className="author">{comment.writer}</div>
                    <div className="reply" onClick={() => setShowReplyInput(!showReplyInput)}>대댓글</div>
                </div>
                <p className='comment'>{comment.text}</p>
            </div>

            <div>
                {comment.replies.map((reply, idx) => (
                    <div className="reply-container" key={idx}>
                        <div className='comment-header'>
                            <div className='profile'></div>
                            <div className="author">대댓글 작성자</div>
                        </div>
                        <p className='replycomment'>{reply}</p>
                    </div>
                ))}

                {showReplyInput && (
                    <div className='reply-input-container'>
                        <input className='reply-input-box' onChange={(e) => { setReplyInput(e.target.value); }} value={replyInput} placeholder="대댓글을 입력하세요." />
                        <button className='comment-button' onClick={() => {
                            if (replyInput.trim() === '') {
                                alert("대댓글을 입력하세요.");
                            } else {
                                handleReplySubmit(comment.id, replyInput);
                                setReplyInput('');
                                setShowReplyInput(false);
                            }
                        }}><img src={process.env.PUBLIC_URL + '/jam_write.png'} alt="write" /></button>
                    </div>
                )}
            </div>
        </>
    );
}
