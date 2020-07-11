import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import placeholderImage from "../../../assets/placeholder image.png"

const PartyCard = ({playerData, key,  draggable, onDragStart, onDragOver, onDrop, onDragLeave}) => {
    console.log(playerData)

   
//   const playerData = useSelector(
//     (state) => state.generalReducer.userPlayerCard
//   );
  return (
    
    <div className='partyCardContainer '>
      <img src={'https://i.pravatar.cc'}/>
      
      <div className='data'>
      <h4>Stats</h4>
        <p>Health {playerData.health}</p>
        <p>Mana {playerData.mana}</p>
        <p>Power {playerData.power}</p>
      </div>

      <div className='data'>
      <h4>Skills</h4>
        <p>{playerData.skill_slot1.name}</p>
        <p>{playerData.skill_slot2.name}</p>
        <p>{playerData.skill_slot3.name}</p>
      </div>

      <div className='data'>
      <h4>Equipment</h4>
        <p>{playerData.equipment_slot1.name}</p>
        <p>{playerData.equipment_slot2.name}</p>
        <p>{playerData.equipment_slot2.name}</p>
      </div>

      <div className='data'>
      <h4>Consumables</h4>
        <p>{playerData.consumable_slot1.name}</p>
        <p>{playerData.consumable_slot2.name}</p>
        <p>{playerData.consumable_slot3.name}</p>
      </div>
    </div>

  );
};

export default PartyCard;
