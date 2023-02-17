import styles from '../../../Styles/Reusable/_signin.module.scss';

const Signin = () => {
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
        <div>SNS 로그인</div>
        <div>SNS 로그인</div>
        <div>SNS 로그인</div>
      </div>
    </div>
  );
};

export default Signin;
