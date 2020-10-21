import React, { useEffect } from "react";
import Stage from "./stage";
import HUD from "./hud";
import PlayerInput from "./playerInput";
import { useSelector, useDispatch } from "react-redux";
import { setCharacter } from "../../actions/gameActions";

const Canvas = () => {
  const gameState = useSelector((state) => state.gameReducer.game);
  const playerSelection = useSelector(
    (state) => state.generalReducer.userPlayerCard
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCharacter(playerSelection));
  }, [playerSelection]);

  return (
    <div className="canvas">
      {gameState.win ? (
        <div className="win modal OpenModal">
          <h2>You Win!</h2>
        </div>
      ) : (
        ""
      )}

      {gameState.lose ? (
        <div className="lose modal OpenModal">
          <h2>You Lose</h2>
        </div>
      ) : (
        ""
      )}

      <HUD />
      <PlayerInput />
      <Stage />
    </div>
  );
};

export default Canvas;
