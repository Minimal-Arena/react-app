import React from "react";
import Stage from "./stage";
import HUD from "./hud";
import PlayerInput from "./playerInput";
import { useSelector } from "react-redux";

const Canvas = props => {
    const gameState = useSelector(state => state.gameReducer.game);

    return (
        <div className="canvas">

            {
                gameState.win
                    ? <div className="win modal OpenModal">
                        <h2>You Win!</h2>
                    </div>
                    : ""
            }

            {
                gameState.lose
                    ? <div className="lose modal OpenModal">
                        <h2>You Lose</h2>
                    </div>
                    : ""
            }

            <HUD />
            <PlayerInput />
            <Stage />
        </div>
    )
}

export default Canvas;