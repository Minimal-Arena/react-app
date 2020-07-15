import axios from "axios";
import history from "../history";
import axiosWithAuth from '../utils/axiosWithAuth'
import React from 'react'
import {redirect} from '../utils/helperFunctions'

const baseURL = "https://minimal-arena.herokuapp.com";
/****** API Cases ******/

/*Base Cases */
export const REGISTER_USER = "REGISTER_USER";

export const LOGIN_USER = "LOGIN_USER";

export const IS_LOADING = "IS_LOADING"

export const GET_CLASSES = 'GET_CLASSES'

/*Success Cases */

export const GET_USER_PLAYER_CARD = 'GET_USER_PLAYER_CARD'
export const NOT_LOADING = 'NOT_LOADING'

/*Fail Cases */

/***********************/ 


/****** API Actions ******/

export const registerUser = (newUser) => (dispatch) => {
  // dispatch({type: REGISTER_USER})
  console.log("action is working");
  axios
    .post(`${baseURL}/api/auth/register`, newUser)
    .then((res) => {

        window.localStorage.setItem('token', res.data.token)
        window.localStorage.setItem('username', res.data.user.username)
        window.localStorage.setItem('user_id', res.data.user.id)
      return redirect("/dashboard");
      // console.log(res);
    })
    .catch((err) => console.log(err));
};

export const loginUser = (userInfo) => (dispatch) => {
  dispatch({type: IS_LOADING})
  axios
    .post(`${baseURL}/api/auth/login`, userInfo)
    .then((res) => {
        window.localStorage.setItem('username', res.data.user.username)
        window.localStorage.setItem('user_id', res.data.user.id)
        window.localStorage.setItem('token', res.data.token)
      console.log(res);
      dispatch({type: NOT_LOADING})
      return redirect(`/dashboard`)
     
    })
    
    .catch((err) => console.log(err))
 
    
    // history.push("/dashboard")
};

export const getPlayerCardData = (user_id) => (dispatch) => {

    axiosWithAuth().get(`/api/game/character/${user_id}`)
    .then(res => {
      dispatch({type: GET_USER_PLAYER_CARD, payload: res.data})
})


}

export const getAllClasses = () => (dispatch) => {
  axiosWithAuth().get(`/api/game/class`)
  .then(res => {
    dispatch({type: GET_CLASSES, payload:res.data})
  })
}
