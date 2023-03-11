import styles from '../../../Styles/Reusable/_signin.module.scss';
import { useState ,FormEvent } from 'react';
import { get_signin } from '../../../Logic/API/GET/get';
import NaverLogin from '../Oauth/NaverLogin';

const Signin = () => {
  const [login, setLogin] = useState({ id: "", pw: "" });

  let {id, pw} = login;

  // 로그인 버튼, Enter를 누를 시 시행
  const onSubmit = async (e?: FormEvent<HTMLFormElement>) =>{
    e?.preventDefault();
    // API 폴더에 get_signin 작성
    const res = await get_signin(login);
  }
  return (
    <div className={styles.login}>
      <div>LOGIN</div>
      <div>
        <input type="text" />
        <input type="text" />
      </div>
      <div>
        <span>아이디/비밀번호 찾기</span>
        <span>회원가입</span>
      </div>
      <div>
        <NaverLogin />
        <div>SNS 로그인</div>
        <div>SNS 로그인</div>
      </div>
    </div>
  );
};

export default Signin;
