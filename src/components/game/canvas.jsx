import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLevelUp } from "../../hooks/useLevelUp";
import { increaseXP, levelUp } from "../../actions/gameActions";
import { useEffect } from "react";

const Canvas = props => {
    const level = useSelector(state => state.gameReducer);
    const [threshold] = useLevelUp(level.level + 1);

    const dispatch = useDispatch();

    useEffect(() => {
        if (level.current_xp >= threshold) {
            dispatch(levelUp());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [level.current_xp])

    const addXP = (e) => {
        e.preventDefault();
        dispatch(increaseXP(200));
    }

    return (
        <div className="canvas">
            Current Level: <h2>{level.level}</h2>
            Current XP: <h2>{level.current_xp}</h2>
            Next Level at: <h2>{threshold}</h2>
            <button
                onClick={addXP}
            >Add XP</button>
        </div>
    )
}

export default Canvas;