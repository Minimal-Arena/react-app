import React from "react";
import char from "../../assets/enemies/ratIdle-export.gif";

const Enemy = props => {
    return (
        <div className="enemy">
            <img src={char} alt="" className="enemyAnim"/>
        </div>
    )
}

export default Enemy;