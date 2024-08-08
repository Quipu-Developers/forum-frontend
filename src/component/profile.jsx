import React from 'react';
import '../style/profile.css';
import { user_data } from '../data/user_data.jsx';


function Profile({ userId, onClose }) {

    // userId에 해당하는 사용자 데이터를 찾습니다.
    const user = user_data.find(user => user.user_id === userId);

    return (
        <div className="profile-modal">
            <h2>이름:{user.user_name}</h2>
            <p>학번: {user.student_id}</p>
            <p>전공: {user.major}</p>
            <p>이메일:{user.email}</p>
            <button onClick={onClose}>닫기</button>
        </div>
    );
}
export default Profile;