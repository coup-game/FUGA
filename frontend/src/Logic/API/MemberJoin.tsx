import React, { Component, ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../Styles/Reusable/_memberjoin.module.scss';
import { register } from './POST/post';

const MemberJoin = () => {

  // State 개수 줄이기
  const [name, setName] = useState('');
  const [fristPw, setFristPw] = useState('');
  const [secondaryPw, setSecondaryPw] = useState('');
  const [email, setEmail] = useState('');


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    /** 
     *  setInput({ ...input, [e.target.name]: e.target.value });
    */
    
  };

  const onSubmit = () => {
    console.log(name, fristPw, secondaryPw, email);
    //비번과 비번확인이 서로 다를 경우 alert 발생
    if (fristPw !== secondaryPw) {
        alert('비밀번호가 일치하지 않습니다');
    }
    register({name, fristPw, email});
    
  };

  return (
    <div className={styles.login}>
        회원가입
      <div>
        <label htmlFor="name">아이디</label>
        <input
          className="name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
      </div>

      <div>
        <label htmlFor="pw">패스워드</label>
        <input
          className="fristPw"
          type="text"
          value={fristPw}
          onChange={(event) => {
            setFristPw(event.target.value);
          }}
        ></input>
      </div>

      <div>
        <label htmlFor="pw">패스워드</label>
        <input
          className="secondaryPw"
          type="text"
          value={secondaryPw}
          onChange={(event) => {
            setSecondaryPw(event.target.value);
          }}
        ></input>
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input
          className="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
      </div>

      <div>
        <button
          onClick={onSubmit}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default MemberJoin;
