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
        if(level.current_xp >= threshold) {
            dispatch(levelUp());
        }
    }, [level.current_xp])

    const addXP = (e) => {
        e.preventDefault();
        dispatch(increaseXP(50));
    }

    return (
        <div className="canvas">
            {level.level}
            <p>{level.current_xp}</p>
            <p>{threshold}</p>
            <button
            onClick={addXP}
            >Add XP</button>
        </div>
    )
}

export default Canvas;