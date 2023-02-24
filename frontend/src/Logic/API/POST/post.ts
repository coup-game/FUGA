import axios from "axios";
import { API_URL } from "../../../env";

interface SignUp {
    name: string,
    fristPw: string,
    email: string,
}

export const register = ({name, fristPw, email}: SignUp) => {
    axios
    //backend로 전달 될 url
  .post(`${API_URL}api/auth/local`, {
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

export const post__makeRoom = async (_roomInfo: any) => {
    try {
      const {roomId, title, mode, lang, rounds, time_limit: limitTime, maximum: maxEntry, pw, roundWord, currWord} = _roomInfo;
      const roomInfo = {
        number: roomId,
        title,
        lang,
        mode,
        rounds,
        limitTime,
        currEntry: 0,
        maxEntry,
        pw,
        players: [],
        roundWord,
        currWord
      }
      const res = await axios.post(`${API_URL}/makeRoom`, {
        ...roomInfo
      });
      return res;
    } catch (e) {
      console.error(e);
    }
  };