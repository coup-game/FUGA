import React, { Component } from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from '../../../Styles/Reusable/_signin.module.scss';



const MemberJoin = () => {
    

    const [name, setName] = useState("");
    const [fristPw, setFristPw] = useState("");
    const [secondaryPw, setSecondaryPw] = useState("");
    const [email, setEmail] = useState("");
    
    //비번과 비번확인이 서로 다를 경우 alert 발생
    useEffect(() => {
        if(fristPw !== secondaryPw){
            alert("비밀번호가 일치하지 않습니다")
        }else{}
    }, [fristPw, secondaryPw])

    const register = () => {
    axios
    //backend로 전달 될 url
  .post('http://localhost:1337/api/auth/local', {
    identifier: name,
    Password : fristPw,
    email : email,
    

  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
}


    return(
        <div>
            <div>
                <label htmlFor="name">아이디</label>
                <input className="name" 
                    type="text" 
                    value = {name} 
                    onChange ={(event) => {setName(event.target.value)}}></input>
            </div>

            <div>
                <label htmlFor="pw">패스워드</label>
                <input className="fristPw" 
                    type="text"
                    value = {fristPw} 
                    onChange ={(event) => {setFristPw(event.target.value)
                    console.log(event.target.value)}}></input>
            </div>

            <div>
                <label htmlFor="pw">패스워드</label>
                <input className="secondaryPw" 
                    type="text"
                    value = {secondaryPw} 
                    onChange ={(event) => {setSecondaryPw(event.target.value)}}></input>
            </div>

            <div>
                <label htmlFor="email">이메일</label>
                <input className="email" 
                    type="email"
                    value = {email} 
                    onChange ={(event) => {setEmail(event.target.value)}}></input>
            </div>
           
            <div>
                <button onClick={()=>{register();}}>확인</button>
            </div>
        </div>
    )
}


export default MemberJoin;
