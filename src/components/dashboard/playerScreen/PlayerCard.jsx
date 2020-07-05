import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPlayerCardData } from "../../../actions";
import placeholderImage from "../../../assets/placeholder image.png";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const PlayerCard = () => {
  const [percentage, setPercentage] = useState(0);
  const [manaPercentage, setManaPercentage] = useState(0);
  const [powerPercentage, setPowerPercentage] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const id = window.localStorage.getItem("user_id");

    dispatch(getPlayerCardData(id));
  }, [dispatch]);

  const playerData = useSelector(
    (state) => state.generalReducer.userPlayerCard
  );

  useEffect(() => {
    const result = playerData.health / 250;
    const newPercent = result * 100;
    setPercentage(newPercent);

    const manaResult = playerData.mana / 500;
    const manaPercent = manaResult * 100;
    setManaPercentage(manaPercent);

    const powerResult = playerData.power / 300;
    const powerPercent = powerResult * 100;
    setPowerPercentage(powerPercent);
  });

  return (
    <div className="playerCardContainer">
      <div className="playerCardDiv">
        <div className="playerCardImg">
          <img src={placeholderImage} />
        </div>
        <h6>{playerData.nickname}</h6>
        <div className="playerInfoDiv">
          <p>
            Experience <span>{playerData.exp}</span>{" "}
          </p>
          <p>
            Role <span>{playerData.class.name}</span>
          </p>
          <div className="healthInfo">
            <p>
              Health <span>{playerData.health}</span>{" "}
            </p>
            <ProgressBar percentage={percentage} />
          </div>
          <div className="healthInfo">
            <p>
              Mana <span>{playerData.mana}</span>
            </p>
            <ProgressBar percentage={manaPercentage} />
          </div>
          <div className="healthInfo">
            <p>
              Power <span>{playerData.power}</span>
            </p>
            <ProgressBar percentage={powerPercentage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
