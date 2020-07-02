import axios from "axios";
import history from "../history";

const baseURL = "https://minimal-arena.herokuapp.com";
/****** API Cases ******/

/*Base Cases */
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";

/*Success Cases */

/*Fail Cases */

/****** API Actions ******/

export const registerUser = (newUser) => (dispatch) => {
  // dispatch({type: REGISTER_USER})
  console.log("action is working");
  axios
    .post(`${baseURL}/api/auth/register`, newUser)
    .then((res) => {
        window.localStorage.setItem('token', res.data.token)
      history.push("/dashboard");
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const loginUser = (userInfo) => (dispatch) => {
  axios
    .post(`${baseURL}/api/auth/login`, userInfo)
    .then((res) => {
        window.localStorage.setItem('token', res.data.token)
      console.log(res);
      setTimeout(history.push("/dashboard"), 2000)
      
    })
    .catch((err) => console.log(err))
    
};
