import React from "react";
import Stage from "./stage";
import HUD from "./hud";
import PlayerInput from "./playerInput";

const Canvas = props => {
    return (
        <div className="canvas">
            <HUD />
            <PlayerInput />
            <Stage />
        </div>
    )
}

export default Canvas;