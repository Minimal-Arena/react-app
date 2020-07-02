import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hitEnemy, attackSelected, removeDamageClass, setEnemyTurn, removeDamagePlayer, switchTurn } from "../../actions/gameActions";
import { useEffect } from "react";

const PlayerInput = props => {
    const stats = useSelector(state => state.gameReducer);
    const turn = useSelector(state => state.gameReducer.current_turn)
    const dispatch = useDispatch();

    useEffect(() => {
        if (turn === 2) {
            dispatch(setEnemyTurn(20));
            setTimeout(() => {
                dispatch(removeDamagePlayer());
                dispatch(switchTurn(1));
            }, 1000)
        }
    }, [turn])

    if (stats.isAttacking) {
        setTimeout(() => {
            dispatch(removeDamageClass());
            dispatch(switchTurn(2))
        }, 1400);
    }

    return (
        <div className="controls">
            {turn !== 1 ? "" : <div className="controls buttons">
                <h2>Skills</h2>
                <button
                    onClick={
                        () => {
                            dispatch(attackSelected(20));
                            setTimeout(() => {
                                dispatch(hitEnemy(50))
                            }, 800)
                        }
                    }
                >Fire</button>

                <button
                    onClick={
                        () => {
                            dispatch(attackSelected(20));
                            setTimeout(() => {
                                dispatch(hitEnemy(50))
                            }, 800)
                        }
                    }
                >Lightning</button>

                <button
                    onClick={
                        () => {
                            dispatch(attackSelected(20));
                            setTimeout(() => {
                                dispatch(hitEnemy(0))
                            }, 800)
                        }
                    }
                >Heal</button>
            </div>}
        </div>
    )
}

export default PlayerInput;