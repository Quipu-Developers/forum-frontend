import React, { useState } from 'react';
import '../style/loginModal.css';

export function LoginModal() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-modal">
            <h2>QUIPU</h2>
            <input placeholder='학번이름 ex) 1234567890퀴푸' onChange={(event) => setId(event.target.value)}></input>
            <input placeholder='비밀번호' onChange={(event) => setPassword(event.target.value)}></input>
            <button>로그인</button>
            <p>비밀번호 찾기</p>
        </div>
    )
}

export function RegisterModal() {
    return (
        <div className="login-modal">
            <p>register modal</p>
        </div>
    )
}