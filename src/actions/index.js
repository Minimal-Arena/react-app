import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import { redirect } from "../utils/helperFunctions";

const baseURL = "https://minimal-arena.herokuapp.com";
/****** API Cases ******/

/*Base Cases */
export const REGISTER_USER = "REGISTER_USER";

export const LOGIN_USER = "LOGIN_USER";

export const IS_LOADING = "IS_LOADING";

export const GET_CLASSES = "GET_CLASSES";

/*Success Cases */
export const GET_USER_CHARACTERS = "GET_USER_CHARACTERS";

export const CREATE_CHARACTER = "CREATE_CHARACTER";

/*Fail Cases */
export const NOT_LOADING = "NOT_LOADING";

export const NO_CHARACTERS = "NO_CHARACTERS";

/*  Misc Cases  */
export const SELECT_CHARACTER = "SELECT_CHARACTER";

/***********************/

/****** API Actions ******/

export const registerUser = (newUser) => (dispatch) => {
  // dispatch({type: REGISTER_USER})
  console.log("action is working");
  axios
    .post(`${baseURL}/api/auth/register`, newUser)
    .then((res) => {
      window.localStorage.setItem("token", res.data.token);
      window.localStorage.setItem("username", res.data.user.username);
      window.localStorage.setItem("user_id", res.data.user.id);
      return redirect("/dashboard");
      // console.log(res);
    })
    .catch((err) => console.log(err));
};

export const loginUser = (userInfo) => (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios
    .post(`${baseURL}/api/auth/login`, userInfo)
    .then((res) => {
      window.localStorage.setItem("username", res.data.user.username);
      window.localStorage.setItem("user_id", res.data.user.id);
      window.localStorage.setItem("token", res.data.token);
      console.log(res);
      dispatch({ type: NOT_LOADING });
      return redirect(`/dashboard`);
    })

    .catch((err) => console.log(err));
};

export const getPlayerData = (info) => (dispatch) => {
  axiosWithAuth()
    .get(`/api/game/character/user/${info.id}`)
    .then((res) => {
      if (res.data.length) {
        console.log(res.data);
        dispatch({
          type: GET_USER_CHARACTERS,
          payload: {
            characters: res.data,
            selectedCharacter: info.selection,
          },
        });
      } else {
        dispatch({ type: NO_CHARACTERS });
      }
    });
};

export const getInitialPlayerData = (user_id) => (dispatch) => {
  axiosWithAuth()
    .get(`/api/game/character/user/${user_id}`)
    .then((res) => {
      if (res.data.length) {
        console.log(res.data);
        dispatch({
          type: GET_USER_CHARACTERS,
          payload: {
            characters: res.data,
            selectedCharacter: res.data[0],
          },
        });
        window.localStorage.setItem(
          "selectedCharacter",
          JSON.stringify(res.data[0])
        );
      } else {
        dispatch({ type: NO_CHARACTERS });
      }
    })
    .catch((err) => {
      console.log("Error getting PlayerData", err);
      dispatch({ type: NO_CHARACTERS });
    });
};

export const getAllClasses = () => (dispatch) => {
  axiosWithAuth()
    .get(`/api/game/class`)
    .then((res) => {
      dispatch({ type: GET_CLASSES, payload: res.data });
    })
    .catch((err) => console.log("Error fetching classes", err));
};

export const createNewCharacter = (character) => (dispatch) => {
  console.log(character);
  const newCharacter = {
    nickname: character.nickname,
    class_id: character.class,
    user_id: window.localStorage.getItem("user_id"),
  };

  axiosWithAuth()
    .post("/api/game/character", newCharacter)
    .then((res) => {
      window.localStorage.setItem(
        "selectedCharacter",
        JSON.stringify(res.data)
      );
      dispatch({ type: CREATE_CHARACTER, payload: res.data });
    })
    .catch((err) =>
      console.log("There was an error creating the new character", err)
    );
};

export const selectCharacter = (selection) => (dispatch) => {
  window.localStorage.setItem("selectedCharacter", JSON.stringify(selection));
  dispatch({ type: SELECT_CHARACTER, payload: selection });
};
