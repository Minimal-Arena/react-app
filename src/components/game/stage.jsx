import React from "react";
import { useSelector } from "react-redux";
import Character from "./character";
import Enemy from "./enemy";

const Stage = props => {
    const level = useSelector(state => state.gameReducer)

    return (
        <div className={`stage ${level.stageNumber}`}>
            <Character />
            <Enemy />
        </div>
    )
}

export default Stage;