/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from "react";
import char from "../../assets/Wizard/WizardIdle-export.gif";
import charAttacking from "../../assets/Wizard/WizardAttackSingleLoop.gif";
import charDamage from "../../assets/Wizard/wizardDamaged-export.gif";
import { useSelector } from "react-redux";

const Character = props => {
    const stats = useSelector(state => state.gameReducer);
    const isAttacking = useSelector(state => state.gameReducer.isAttacking)
    const [animation, setAnimation] = useState(char);

    useEffect(() => {
        if (stats.isDamaged) {
            setAnimation(charDamage);
        } else if (stats.isAttacking) {
            setAnimation(charAttacking);
        } else {
            setAnimation(char);
        }
    }, [stats.isDamaged, stats.isAttacking])

    return (
        <div className="char">
            <h3 className={stats.isDamaged ? "health Damage" : "health"}>{stats.health}❤️</h3>
            <h3 className="mana">{stats.mana}🔵</h3>
            <h3 className="power">{stats.power}⚔️</h3>
            <img
                src={animation}
                alt=""
                className="charAnim"
            />
        </div>
    )
}

export default Character;