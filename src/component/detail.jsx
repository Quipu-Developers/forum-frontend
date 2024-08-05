import React, { useState } from 'react';
import '../style/detail.css';
import {board_post_data} from '../data/board_post_data.jsx';
import {board_comment_data} from '../data/board_comment_data.jsx';
import { useParams } from 'react-router-dom'

export default function Detail() {
    const { postId } = useParams(); // URL에서 postId 가져옴  Params를 이용하면 문자열로 전달됨
    const id = parseInt(postId); // 문자열을 숫자로 변환

     // postId에 해당하는 모든 댓글을 가져옴
    const comment_datas = board_comment_data.filter(item => item.post_id === id);
    // postId에 해당하는 게시글을 가져옴
    const post = board_post_data.find(item => item.post_id === id);

    console.log('postId:', postId);
    console.log('id:', id);
    console.log('post:', post);

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
            <div>
            <h1>Detail Page</h1>
            
            {comment_datas.length > 0 ? (
                comment_datas.map(comment => (
                    <div key={comment.comment_id}>
                        <p>댓글 ID: {comment.comment_id}</p>
                        <p>작성자: {comment.user_name}</p>
                        <p>댓글 내용: {comment.comment}</p>
                        <p>작성 시간: {comment.post_time}</p>
                    </div>
                ))
            ) : (
                <p>이 포스트에 대한 댓글이 없습니다.</p>
            )}
        </div>
                <p className='ListTitle'>자유게시판</p>
                <div className="Container">
                    <div className='Header'>
                        <div className='back'><img src={process.env.PUBLIC_URL + '/_-.png'} alt="write" /></div>
                        <div className='info'>
                            <p className='title'>{post.title}</p>
                            <p className="write-info"><span className='writer'>{post.user_name}&ensp;</span> <span className='date'>{post.post_time}</span></p>
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
