import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLevelUp } from "../../hooks/useLevelUp";
import { increaseXP, levelUp } from "../../actions/gameActions";
import { useEffect } from "react";

const HUD = () => {
  const level = useSelector((state) => state.gameReducer);
  const [threshold] = useLevelUp(level.level + 1);

  const dispatch = useDispatch();

  useEffect(() => {
    if (level.current_xp >= threshold) {
      dispatch(levelUp());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level.current_xp]);

  const addXP = (e) => {
    e.preventDefault();
    dispatch(increaseXP(200));
  };

  return (
    <div className="hud">
      <h2>Current Level: {level.level}</h2>
      <h2>Current XP: {level.current_xp}</h2>
      <h2>Next Level at: {threshold}</h2>
      <button onClick={addXP}>Add XP</button>
    </div>
  );
};

export default HUD;
