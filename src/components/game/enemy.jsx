/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import char from "../../assets/enemies/ratIdle-export.gif";
import { useSelector } from "react-redux";

const Enemy = props => {
    const stats = useSelector(state => state.gameReducer);

    return (
        <div className="enemy">
            <h3 className="healthE">{stats.enemy.health}💀</h3>
            <img src={char} alt="" className="enemyAnim" />
        </div>
    )
}

export default Enemy;