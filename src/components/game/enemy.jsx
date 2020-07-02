/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import char from "../../assets/enemies/ratIdle-export.gif";
import { useSelector } from "react-redux";

const Enemy = props => {
    const stats = useSelector(state => state.gameReducer.enemy);

    return (
        <div className="enemy">
            <h3 className={stats.isDamaged ? `healthE Damage` : "healthE"}>{stats.health}💀</h3>
            <img src={char} alt="" className={`enemyAnim`} />
        </div>
    )
}

export default Enemy