import axios from "axios";
import { API_URL } from "../../../env";

interface SignUp {
    name?: string,
    pw: string,
    email: string,
}

export const register = ({name, pw, email}: SignUp) => {
    axios
    //backend로 전달 될 url
  .post(API_URL, {
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