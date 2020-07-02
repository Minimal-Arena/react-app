/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import char from "../../assets/enemies/ratIdle-export.gif";
import charDamaged from "../../assets/enemies/ratDamaged-export.gif";
import charAttack from "../../assets/enemies/ratAttack-export.gif";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Enemy = props => {
    const stats = useSelector(state => state.gameReducer.enemy);

    const [animation, setAnimation] = useState(char);

    useEffect(() => {
        if (stats.isDamaged) {
            setAnimation(charDamaged);
        } else if (stats.isAttacking) {
            setAnimation(charAttack);
        } else {
            setAnimation(char);
        }
    }, [stats.isDamaged, stats.isAttacking])

    return (
        <div className="enemy">
            <h3 className={stats.isDamaged ? `healthE Damage` : "healthE"}>{stats.hp}💀</h3>
            <img src={animation} alt="" className={`enemyAnim`} />
        </div>
    )
}

export default Enemy