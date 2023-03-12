import styles from "../../../Styles/Reusable/_signin.module.scss";
import { useState, FormEvent, ChangeEvent } from "react";
import { get_signin } from "../../../Logic/API/GET/get";
import NaverLogin from "../Oauth/NaverLogin";
import GoogleLoginButton from "../Oauth/GoogleLoginButton";

const Signin = () => {
  const [input, setInput] = useState({ id: "", pw: "" });
  let { id, pw } = input;

  // 로그인 버튼, Enter를 누를 시 시행
  const onSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    // API 폴더에 get_signin 작성
    const res = await get_signin(input);
    console.log(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_title}>LOGIN</div>
      <form className={styles.login_form} onSubmit={onSubmit}>
        <div className={styles.input_wrapper}>
          <input
            type="text"
            id="id"
            placeholder=" "
            name="id"
            value={id}
            onChange={onChange}
          />
        </div>
        <div className={styles.input_wrapper}>
          <input
            type="password"
            id="pw"
            placeholder=" "
            name="pw"
            value={pw}
            onChange={onChange}
          />
        </div>
      </form>

      <div>
        <span>아이디/비밀번호 찾기</span>
        <span>회원가입</span>
      </div>
      <div>
        <div>게스트로 로그인</div>
        <NaverLogin />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default Signin;
