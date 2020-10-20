import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import placeholderImage from "../../../assets/placeholder image.png";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const PlayerCard = () => {
  const [percentage, setPercentage] = useState(0);
  const [manaPercentage, setManaPercentage] = useState(0);
  const [powerPercentage, setPowerPercentage] = useState(0);

  const playerData = useSelector(
    (state) => state.generalReducer.userPlayerCard
  );
  const loadingCharacters = useSelector((state) => state.generalReducer.loadingCharacters);

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
  }, [playerData, loadingCharacters]);

  return loadingCharacters ? null : (
    <div className="playerCardContainer">
      <div className="playerCardDiv">
        <div className="playerCardImg">
          <img
            src={playerData ? playerData.class.asset_idle : null}
            onError={(e) => (e.target.src = placeholderImage)}
            alt={`A ${playerData.class.name}, named ${playerData.nickname}, idly waiting`}
          />
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
