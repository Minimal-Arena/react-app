import axios from "axios";
import { Redirect } from "react-router";
import React from 'react'

const baseURL = "https://minimal-arena.herokuapp.com";
/****** API Cases ******/

/*Base Cases */
export const REGISTER_USER = "REGISTER_USER";

/*Success Cases */

/*Fail Cases */

/****** API Actions ******/

export const registerUser = (newUser, history) => (dispatch) => {
  // dispatch({type: REGISTER_USER})
  console.log("action is working");
  axios.post(`${baseURL}/api/auth/register`, newUser)
  .then((res) => {
    window.localStorage.setItem("token", res.data.token);
    
  })
  .catch(err => console.log(err))
};
