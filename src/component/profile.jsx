import React from 'react';
import '../style/profile.css';
import { user_data } from '../data/user_data.jsx';


function Profile({ userId, onClose }) {
    return (
        <div className="profile-modal">
            <h2>이름:{user_data.user_name}</h2>
            <p>학번: {user_data.student_id}</p>
            <p>전공: {user_data.major}</p>
            <p>이메일:{user_data.email}</p>
            <button onClick={onClose}>닫기</button>
        </div>
    );
}
export default Profile;