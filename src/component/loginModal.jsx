import React, { useState } from 'react';
import '../style/loginModal.css';

export function LoginModal({ handleLoginClose }) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-modal">
            <h2>QUIPU</h2>
            <input placeholder='학번이름 ex) 1234567890퀴푸' onChange={(event) => setId(event.target.value)}></input>
            <input placeholder='비밀번호' onChange={(event) => setPassword(event.target.value)}></input>
            <button>로그인</button>
            <h6>비밀번호를 잊으셨나요?</h6>
            <p className="close-button" onClick={() => handleLoginClose()}>✕</p>
        </div>
    )
}

export function RegisterModal({ handleRegisterClose }) {
    return (
        <div className="register-modal">
            <div className="register-left">
                <img src='./image/welcome.png'></img>
                <p>현재는 퀴푸 회원만 가입할 수 있습니다.<br></br>퀴푸를 사랑해주셨던 선배님께서라면 번거로우시겠지만, <a href="mailto:quipu@gmail.com?subject=[퀴푸 포럼 웹 가입 신청]">quipu@gmail.com</a>으로 연락 주시면 가입을 도와드리겠습니다. 감사합니다!</p>
            </div>
            <div className="register-right">
                <h2>Welcome To QUIPU!</h2>
                <div className="register-input-box">
                    <p>이름</p>
                    <input></input>
                </div>
                <div className="register-input-box">
                    <p>학번</p>
                    <input></input>
                </div>
                <div className="register-input-box">
                    <p>비밀번호</p>
                    <input></input>
                </div>
                <div className="register-input-box">
                    <p>비밀번호 확인</p>
                    <input></input>
                </div>
                <div className="register-input-box">
                    <p>이메일</p>
                    <input></input>
                </div>
                <button>가입하기</button>
            </div>
            <p className="close-button" onClick={() => handleRegisterClose()}>✕</p>
        </div>
    )
}