import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hitEnemy, attackSelected, removeDamageClass } from "../../actions/gameActions";
import { useEffect } from "react";

const PlayerInput = props => {
    const stats = useSelector(state => state.gameReducer);

    const dispatch = useDispatch();

    if(stats.isAttacking) {
        setTimeout(() => {
            dispatch(removeDamageClass());
        }, 1400);
    }

    return (
        <div className="controls">
            <h2>Skills</h2>
            <button
                onClick={
                    () => {
                        dispatch(attackSelected());
                        setTimeout(() => {
                            dispatch(hitEnemy(50))
                        }, 800)
                    }
                }
            >Fire</button>

            <button
                onClick={
                    () => {
                        dispatch(attackSelected());
                        setTimeout(() => {
                            dispatch(hitEnemy(50))
                        }, 800)
                    }
                }
            >Lightning</button>

            <button
                onClick={
                    () => {
                        dispatch(attackSelected());
                        setTimeout(() => {
                            dispatch(hitEnemy(0))
                        }, 800)
                    }
                }
            >Heal</button>
        </div>
    )
}

export default PlayerInput;