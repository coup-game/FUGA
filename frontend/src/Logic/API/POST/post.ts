import axios from "axios";
import { SignUp } from "../../../interface";
// import { API_URL } from "../../../env";

<<<<<<< HEAD


export const register = ({name, pw, email}: SignUp) => {
    axios
    //backend로 전달 될 url
  .post('http://127.0.0.1:5173/api/auth/local', {
=======
interface SignUp {
    name?: string,
    pw: string,
    email: string,
}

export const register = ({name, pw, email}: SignUp) => {
    axios
    //backend로 전달 될 url
  .post(API_URL, {
>>>>>>> e4cf262a2330a7d14d82562e5c96eb259ee87298
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