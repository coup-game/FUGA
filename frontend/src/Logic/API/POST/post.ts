import axios from "axios";
import { SignUp } from "../../../interface";
// import { API_URL } from "../../../env";

export const register = ({name, pw, email}: SignUp) => {
    axios
    //backend로 전달 될 url
  .post('http://127.0.0.1:5173/api/auth/local', {
    identifier: name,
    Password : pw,
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