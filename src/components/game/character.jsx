/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import char from "../../assets/Wizard/WizardIdle-export.gif";
import charAttacking from "../../assets/Wizard/WizardAttackSingleLoop.gif";
import { useSelector } from "react-redux";

const Character = props => {
    const stats = useSelector(state => state.gameReducer);
    const isAttacking = useSelector(state => state.gameReducer.isAttacking)

    return (
        <div className="char">
            <h3 className="health">{stats.health}❤️</h3>
            <img 
            src={isAttacking ? charAttacking :char} 
            alt="" 
            className="charAnim"
            />
        </div>
    )
}

export default Character;