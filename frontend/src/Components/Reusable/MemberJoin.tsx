import React, { Component, ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../Styles/Reusable/_memberjoin.module.scss';
import { register } from '../../Logic/API/POST/post';


interface info {
  id : string,
  fristPw : string,
  secondaryPw : string,
  email : string,
}

const MemberJoin = () => {

    const [info, setInfo] = useState({
      id : "",
      fristPw : "",
      secondaryPw : "",
      email : "",
  })

    const {id, fristPw, secondaryPw, email} = info

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

    setInfo({...info, [e.target.name]:e.target.value})
      //...arr = psread operator(배열이나 문자열 등을 요소 하나하나로 전개)
    }
    const onSubmit = ({id, fristPw, secondaryPw, email}: info) => {
      //비번과 비번확인이 서로 다를 경우 alert 발생
      if (fristPw !== secondaryPw) {
          alert('비밀번호가 일치하지 않습니다');
      }
        register(info);
    
  };

  return (
    <div className={styles.login}>
        회원가입
      <div>
        <label htmlFor="name">아이디</label>
        <input 
          name="id"
          type="text"
          value={id}
          onChange = {(event)=>{setId(event.target.value)
            console.log(event.target.value)}}
          ></input>
      </div>

      <div>
        <label htmlFor="pw">패스워드</label>
        <input
          name="fristPw"
          type="text"
          value={fristPw}
          onChange = {(event)=>{setFristPw(event.target.value)
          console.log(event.target.value)}}
        ></input>
      
      </div>

      <div>
        <label htmlFor="pw">패스워드</label>
        <input
          name="secondaryPw"
          type="text"
          value={secondaryPw}
          onChange = {(event)=>{setSecondaryPw(event.target.value)
            console.log(event.target.value)}}
        ></input>
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange = {(event)=>{setEmail(event.target.value)
            console.log(event.target.value)}}
        ></input>
      </div>

      <div>
        <button
          onClick={()=> {onSubmit}}
        >
          확인
        </button>
      </div>
    </div>
  );
};


export default MemberJoin;
