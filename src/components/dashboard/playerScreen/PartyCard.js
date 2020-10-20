import React, { useState } from "react";
import { useDispatch } from "react-redux";
import placeholderImage from "../../../assets/placeholder image.png";

const PartyCard = ({
  hero,
  draggable,
  onDragStart,
  onDragOver,
  onDrop,
  onDragLeave,
}) => {
  console.log(hero);

  return (
    <div className="partyCardContainer ">
      <img
        src={hero.class.asset_idle}
        onError={(e) => (e.target.src = "https://i.pravatar.cc")}
        alt={`A ${hero.class.name}, named ${hero.nickname}, idly waiting.`}
      />

      <div className="data">
        <h4>Stats</h4>
        <p>Health {hero.health}</p>
        <p>Mana {hero.mana}</p>
        <p>Power {hero.power}</p>
      </div>

      <div className="data">
        <h4>Skills</h4>
        <p>{hero.skill_slot1.name}</p>
        <p>{hero.skill_slot2.name}</p>
        <p>{hero.skill_slot3.name}</p>
      </div>

{/* TODO: RE-IMPLEMENT THESE FIELDS AS Equipment and Consumables are added to the game */}
      {/* <div className='data'>
          <h4>Equipment</h4>
            <p>{hero.equipment_slot1.name}</p>
            <p>{hero.equipment_slot2.name}</p>
            <p>{hero.equipment_slot2.name}</p>
          </div>

          <div className='data'>
          <h4>Consumables</h4>
            <p>{hero.consumable_slot1.name}</p>
            <p>{hero.consumable_slot2.name}</p>
            <p>{hero.consumable_slot3.name}</p>
          </div> */}
    </div>
  );
};

export default PartyCard;
