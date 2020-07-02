import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hitEnemy } from "../../actions/gameActions";
import { useEffect } from "react";

const PlayerInput = props => {
    const stats = useSelector(state => state.gameReducer);

    const dispatch = useDispatch();

    return (
        <div className="controls">
            <h2>Skills</h2>
            <button
                onClick={
                    () => {
                        dispatch(hitEnemy(50))
                    }
                }
            >Fire</button>

            <button
                onClick={
                    () => {
                        dispatch(hitEnemy(30))
                    }
                }
            >Lightning</button>

            <button
                onClick={
                    () => {
                        dispatch(hitEnemy(0))
                    }
                }
            >Heal</button>
        </div>
    )
}

export default PlayerInput;