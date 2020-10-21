/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from "react";
import char from "../../assets/Wizard/idle.gif";
import charAttacking from "../../assets/Wizard/attack.gif";
import charDamage from "../../assets/Wizard/damaged.gif";
import { useSelector, useDispatch } from "react-redux";
import { lose } from "../../actions/gameActions";

const Character = () => {
    const stats = useSelector(state => state.gameReducer);
    const [animation, setAnimation] = useState(char);

    const dispatch = useDispatch();

    useEffect(() => {
        if (stats.isDamaged) {
            setAnimation(charDamage);
        } else if (stats.isAttacking || stats.isUsingSkill) {
            setAnimation(charAttacking);
        } else {
            setAnimation(char);
        }

        if (stats.health <= 0) {
            dispatch(lose());
        }

    }, [stats.isDamaged, stats.isAttacking, stats.isUsingSkill])

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