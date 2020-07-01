import React from "react";
import { useSelector } from "react-redux";
import { useLevelUp } from "../../hooks/useLevelUp";

const Canvas = props => {
    const level = useSelector(state => state.gameReducer);
    const [threshold] = useLevelUp(level.level + 1)

    const addXP = (e) => {
        e.preventDefault();

    }

    return (
        <div className="canvas">
            {level.level}
            <p>{level.current_xp}</p>
            <p>{threshold}</p>
            <button>Add XP</button>
        </div>
    )
}

export default Canvas;