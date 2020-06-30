import {combineReducers} from "redux";
import {gameReducer} from "./gameReducer";
import {generalReducer} from "./generalReducer";

export default combineReducers({
    gameReducer,
    generalReducer
})