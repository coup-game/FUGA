import { NAVER_CLIENT_ID, API_URL } from "../../../env";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NaverLogin = (props: any) => {
  const { naver } = window as any;

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: API_URL,
      isPopup: true,
      loginButton: { color: "green", type: 3, height: "42" },
    });
    naverLogin.init();
  };
  
  const location = useLocation();  

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    console.log(token);
  };

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);

  return <div id="naverIdLogin"> </div>;
};

export default NaverLogin;
