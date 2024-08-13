import React, { useState } from 'react';
import '../style/detail.css';
import Profile from './profile.jsx';
import { board_post_data } from '../data/board_post_data.jsx';
import { board_comment_data } from '../data/board_comment_data.jsx';
import { useParams } from 'react-router-dom'
import { user_data } from '../data/user_data.jsx';


export default function Detail( ) {


    const { postId, boardType } = useParams(); // postId와 boardType을 가져옴
    const id = parseInt(postId); // 문자열을 숫자로 변환

    if (boardType==='자유게시판'){

    }

    // postId에 해당하는 모든 댓글을 가져옴
    const comment_datas = board_comment_data.filter(item => item.post_id === id);
    // postId에 해당하는 게시글을 가져옴
    const post = board_post_data.find(item => item.post_id === id);

    let [comments, setComments] = useState(comment_datas); // comment_datas를 초기 상태로 사용
    let [commentInput, setCommentInput] = useState('');

    const handleReplySubmit = (commentId, replyText) => {
        const newReply = {
            comment_id: comments.length + 1, // 새로운 댓글 ID
            parent_comment_id: commentId, // 부모 댓글 ID
            post_id: id, // 게시글 ID
            user_name: comments.user_name, // 작성자 이름
            comment: replyText, // 대댓글 내용
            replies: [] // 대댓글은 없으므로 빈 배열
        };
    
        let newComments = comments.map(comment => {
            if (comment.comment_id === commentId) {
                // replies를 배열로 초기화
                const updatedReplies = Array.isArray(comment.replies) ? comment.replies : [];
                return { ...comment, replies: [...updatedReplies, newReply] }; // 대댓글 추가
            }
            return comment;
        });
        setComments(newComments);
    };
    
    const handleCommentSubmit = () => {
        if (commentInput.trim() === '') {
            alert("댓글을 입력하세요.");
        } else {
            let newComment = {
                comment_id: comments.length + 1,
                parent_comment_id: -1,
                post_id: id,
                user_name: comments.user_name,
                comment: commentInput,
                replies: [] // replies를 빈 배열로 초기화
            };
            setComments([newComment, ...comments]);
            setCommentInput('');
        }
    };
    
    return (
        <div className='root'>
            <div className='full-detail'>
                <div>
                    <h1>Detail Page</h1>
                </div>
                <p className='ListTitle'>자유게시판</p>
                <div className="Container">
                    <div className='Header'>
                        <div className='back'><img src={process.env.PUBLIC_URL + '/_-.png'} alt="write" /></div>
                        <div className='info'>
                            <p className='title'>{post.title}</p>
                            <p className="write-info">
                                <span className='writer'>{post.user_name}&ensp;</span>
                                <span className='date'>{post.post_time}</span>
                            </p>
                        </div>
                    </div>
                    <div className='Content'>
                        <p className='content'>내용</p>
                    </div>
                    <div className='comment-section'>
                        <div className='input-container'>
                            <input
                                className='input-box'
                                onChange={(e) => { setCommentInput(e.target.value); }}
                                value={commentInput}
                                placeholder="댓글을 입력하세요."
                            />
                            <button className='comment-button' onClick={handleCommentSubmit}>
                                <img src={process.env.PUBLIC_URL + '/jam_write.png'} alt="write" />
                            </button>
                        </div>

                        <div className='comment-list'>
                            {comments.length > 0 ? (
                                comments
                                    .filter(comment => comment.parent_comment_id === -1) // parent_comment_id가 -1인 것만 필터링
                                    .map((comment) => (
                                        <Comment
                                            key={comment.comment_id}
                                            comment={{
                                                id: comment.comment_id,
                                                writer: comment.user_name,
                                                text: comment.comment,
                                                replies: comments.filter(reply => reply.parent_comment_id === comment.comment_id) // 해당 댓글의 대댓글 필터링
                                            }}
                                            handleReplySubmit={handleReplySubmit}
                                        />
                                    ))
                            ) : (
                                <p>이 포스트에 대한 댓글이 없습니다.</p>
                            )}
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
    const [IsprofileOpen, setIsprofileOpen] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null); // 현재 사용자 ID 상태 추가


    const openProfileModal = (userId) => {
        setIsprofileOpen(true);
        setCurrentUserId(userId); // 현재 댓글의 user_id를 저장
    };

    const closeProfileModal = () => {
        setIsprofileOpen(false);
    };

    return (
        <>
            <div className="comment-container">
                <div className='comment-header'>
                    <div className='profile'></div>
                    <div className="author" onClick={() => { openProfileModal(comment.id) }}>{comment.writer}</div>
                    <div className="reply" onClick={() => setShowReplyInput(!showReplyInput)}>대댓글</div>
                </div>
                <p className='comment'>{comment.text}</p>
            </div>

            <div>
                {comment.replies.map((reply, idx) => (
                    <div className="reply-container" key={idx}>
                        <div className='comment-header'>
                            <div className='profile'></div>
                            <div className="author" onClick={() => { openProfileModal(reply.user_id) }}>{reply.user_name}</div>
                        </div>
                        <p className='replycomment'>{reply.comment}</p>
                    </div>
                ))}

                {showReplyInput && (
                    <div className='reply-input-container'>
                        <input
                            className='reply-input-box'
                            onChange={(e) => { setReplyInput(e.target.value); }}
                            value={replyInput}
                            placeholder="대댓글을 입력하세요."
                        />
                        <button className='comment-button' onClick={() => {
                            if (replyInput.trim() === '') {
                                alert("대댓글을 입력하세요.");
                            } 
                            else {
                                handleReplySubmit(comment.id, replyInput);
                                setReplyInput('');
                                setShowReplyInput(false);
                            }
                        }} >
                            <img src={process.env.PUBLIC_URL + '/jam_write.png'} alt="write" />
                        </button>
                    </div>
                )}
            </div>
            {IsprofileOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <Profile userId={currentUserId} onClose={closeProfileModal} />
                    </div>
                </div>
            )}
        </>
    );
}
