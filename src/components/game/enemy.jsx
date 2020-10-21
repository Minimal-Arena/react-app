/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import char from "../../assets/enemies/ratIdle-export.gif";
import charDamaged from "../../assets/enemies/ratDamaged-export.gif";
import charAttack from "../../assets/enemies/ratAttack-export.gif";
import charDead from "../../assets/enemies/ratDead-export.gif";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  win,
  setEnemyTurn,
  switchTurn,
  setEnemyDead,
  increaseXP,
} from "../../actions/gameActions";

const Enemy = () => {
  const stats = useSelector((state) => state.gameReducer.enemy);
  const turn = useSelector((state) => state.gameReducer.current_turn);
  const [animation, setAnimation] = useState(char);

  const dispatch = useDispatch();

  useEffect(() => {
    if (stats.isDamaged) {
      setAnimation(charDamaged);
    } else if (stats.isAttacking) {
      setAnimation(charAttack);
    } else if (stats.isDead) {
      setAnimation(charDead);
    } else {
      setAnimation(char);
    }

    if (stats.hp <= 0) {
      dispatch(setEnemyDead());
      dispatch(increaseXP(400));
      dispatch(win(20));
      dispatch(switchTurn(3));
    }
  }, [stats.isDamaged, stats.isAttacking, stats.isDead]);

  return (
    <div className="enemy">
      <h3 className={stats.isDamaged ? `healthE Damage` : "healthE"}>
        {stats.hp}💀
      </h3>
      <img src={animation} alt="" className={`enemyAnim`} />
    </div>
  );
};

export default Enemy;
