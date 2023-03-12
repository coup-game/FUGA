import { useGoogleLogin } from "@react-oauth/google";
import styles from "../../../Styles/Reusable/_signin.module.scss";

const GoogleLoginButton = () => {
  const googleSocialLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
    },
    flow: "auth-code",
  });

  return (
    <div className={styles.google_login}>
      <div className={styles.google_login_wrapper} onClick={() => googleSocialLogin()}>
        <div className="social_login_image_box">
          <img
            src="../../../../assets\btn_google_signin_light_focus_web@2x.png"
            alt="signIn google"
            width="200rem"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleLoginButton;
