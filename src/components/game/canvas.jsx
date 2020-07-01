import React from "react";
import Stage from "./stage";
import HUD from "./hud";

const Canvas = props => {
    return (
        <div className="canvas">
            <HUD />
            <Stage />
        </div>
    )
}

export default Canvas;