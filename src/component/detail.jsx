import React, { useState } from 'react';
import '../style/detail.css';
import { board_post_data } from '../data/board_post_data.jsx';
import { board_comment_data } from '../data/board_comment_data.jsx';
import { useParams } from 'react-router-dom'

export default function Detail() {
    const { postId } = useParams(); // URL에서 postId 가져옴
    const id = parseInt(postId); // 문자열을 숫자로 변환

    // postId에 해당하는 모든 댓글을 가져옴
    const comment_datas = board_comment_data.filter(item => item.post_id === id);
    // postId에 해당하는 게시글을 가져옴
    const post = board_post_data.find(item => item.post_id === id);

    let [comments, setComments] = useState(comment_datas); // comment_datas를 초기 상태로 사용
    let [commentInput, setCommentInput] = useState('');

    const handleReplySubmit = (commentId, replyText) => {
        let newComments = comments.map(comment => {
            if (comment.comment_id === commentId) {
                return { ...comment, replies: [...comment.replies, { text: replyText, user_name: '작성자' }] };
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
                user_name: '작성자',
                comment: commentInput,
                replies: []
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
                            <div className="author">{reply.user_name}</div>
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
                            } else {
                                handleReplySubmit(comment.id, replyInput);
                                setReplyInput('');
                                setShowReplyInput(false);
                            }
                        }}>
                            <img src={process.env.PUBLIC_URL + '/jam_write.png'} alt="write" />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}