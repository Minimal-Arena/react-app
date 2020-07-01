import React from "react";
import char from "../../assets/Wizard/WizardIdle-export.gif";

const Character = props => {
    return (
        <div className="char">
            <img src={char} alt="" className="charAnim"/>
        </div>
    )
}

export default Character;