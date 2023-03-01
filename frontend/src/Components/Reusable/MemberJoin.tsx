import React, { Component, ChangeEvent, FormEvent } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../Styles/Reusable/_memberjoin.module.scss';
import { register } from '../../Logic/API/POST/post';
import { member } from '../../interface';


const MemberJoin = () => {

    const [member, setMember] = useState({
      id : "",
      pw : "",
      confirmPw : "",
      email : "",
  })

     const {id, pw, confirmPw, email} = member


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

    setMember({...member, [e.target.name]:e.target.value})
    }

    const comparePw = (pw: string, comparePw: string) => {
      if(pw !== confirmPw){
        alert("비밀번호가 일치하지 안습니다!")
      }else{
        console.log("비밀번호가 같습니다.")
      }
    }

    const onSubmit = (e : FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      comparePw(pw, confirmPw);
      console.log(member)
      register(member);
    }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
    회원가입
    <div>
      <label htmlFor="name">아이디</label>
      <input name="id" type="text" value={id} onChange={onChange}></input>
    </div>
    <div>
      <label htmlFor="pw">비밀번호</label>
      <input name="pw" type="text" value={pw} onChange={onChange}></input>
    </div>
    <div>
      <label htmlFor="pw">비밀번호 확인</label>
      <input
        name="confirmPw"
        type="text"
        value={confirmPw}
        onChange={onChange}
      ></input>
    </div>
    <div>
      <label htmlFor="email">이메일</label>
      <input
        name="email"
        type="email"
        value={email}
        onChange={onChange}
      ></input>
    </div>
    <div>
      <button>확인</button>
    </div>
  </form>
);
};


export default MemberJoin;
