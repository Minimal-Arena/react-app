// Use this reducer for general functions -- logging in, getting user data, ect.

import {
  IS_LOADING,
  NOT_LOADING,
  GET_CLASSES,
  GET_USER_CHARACTERS,
  NO_CHARACTERS,
  CREATE_CHARACTER,
  SELECT_CHARACTER
} from "../actions";

const initialGeneralState = {
  isLoading: false,
  loadingCharacters: true,
  loggedin: false,
  allClasses: [],
  friends: [
    {
      id: 1,
      username: "Vippsi",
      userStatus: true,
    },
    {
      id: 2,
      username: "Iatechristmas",
      userStatus: true,
    },
    {
      id: 3,
      username: "meep-morp",
      userStatus: false,
    },
    {
      id: 4,
      username: "theJeff",
      userStatus: true,
    },
    {
      id: 5,
      username: "Desypher",
      userStatus: true,
    },
    {
      id: 6,
      username: "LynxKhaos",
      userStatus: false,
    },
    {
      id: 7,
      username: "Drankopolis",
      userStatus: true,
    },
    {
      id: 8,
      username: "That one Guy",
      userStatus: false,
    },
    {
      id: 9,
      username: "Test User",
      userStatus: true,
    },
    { id: 10, username: "Willy", userStatus: false },
  ],
  characters: [],
  userPlayerCard: {},
};
export const generalReducer = (state = initialGeneralState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case GET_USER_CHARACTERS:
      return {
        ...state,
        characters: [...action.payload.characters],
        userPlayerCard: action.payload.selectedCharacter,
        loadingCharacters: false,
      };
    case NO_CHARACTERS:
      return {
        ...state,
        loadingCharacters: true
      }
    case GET_CLASSES:
      return {
        ...state,
        allClasses: action.payload,
      };
    case CREATE_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
        userPlayerCard: action.payload,
        loadingCharacters: false
      }
      case SELECT_CHARACTER:
        return {
          ...state,
          userPlayerCard: action.payload
        }
    default:
      return state;
  }
};
