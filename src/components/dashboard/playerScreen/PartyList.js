import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PartyCard from "./PartyCard";

// const playerDataArr = [
//   {
//     id: 1,
//     class: {
//       id: 1,
//       name: "Wizard",
//       base_health: 150,
//       base_mana: 250,
//       base_power: 50,
//     },
//     nickname: "Jeff's Archer",
//     exp: "1000",
//     health: 230,
//     mana: 320,
//     power: 150,
//     skill_slot1: {
//       id: 1,
//       name: "Fireball",
//       type: "magic",
//       description: "A firey ball",
//       base_power: 100,
//       cost: 50,
//     },
//     skill_slot2: {
//       id: 2,
//       name: "Lightning",
//       type: "magic",
//       description: "A bolty bolt",
//       base_power: 150,
//       cost: 100,
//     },
//     skill_slot3: {
//       id: 3,
//       name: "Healing",
//       type: "magic",
//       description: null,
//       base_power: 20,
//       cost: 100,
//     },
//     consumable_slot1: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     consumable_slot2: {
//       id: 2,
//       name: "Rotten Fish",
//       description: "Makes the user sick.",
//       effect: "-20",
//     },
//     consumable_slot3: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     equipment_slot1: {
//       id: 1,
//       name: "Sword",
//       type: "melee",
//       description: "The standard starter weapon",
//       level: 0,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot2: {
//       id: 2,
//       name: "Shield",
//       type: "defense",
//       description: "Ye ol' boring shield",
//       level: 1,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot3: null,
//   },

//   {
//     id: 2,
//     class: {
//       id: 1,
//       name: "Wizard",
//       base_health: 150,
//       base_mana: 250,
//       base_power: 50,
//     },
//     nickname: "Jeff's Archer",
//     exp: "1000",
//     health: 230,
//     mana: 320,
//     power: 150,
//     skill_slot1: {
//       id: 1,
//       name: "Fireball",
//       type: "magic",
//       description: "A firey ball",
//       base_power: 100,
//       cost: 50,
//     },
//     skill_slot2: {
//       id: 2,
//       name: "Lightning",
//       type: "magic",
//       description: "A bolty bolt",
//       base_power: 150,
//       cost: 100,
//     },
//     skill_slot3: {
//       id: 3,
//       name: "Healing",
//       type: "magic",
//       description: null,
//       base_power: 20,
//       cost: 100,
//     },
//     consumable_slot1: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     consumable_slot2: {
//       id: 2,
//       name: "Rotten Fish",
//       description: "Makes the user sick.",
//       effect: "-20",
//     },
//     consumable_slot3: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     equipment_slot1: {
//       id: 1,
//       name: "Sword",
//       type: "melee",
//       description: "The standard starter weapon",
//       level: 0,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot2: {
//       id: 2,
//       name: "Shield",
//       type: "defense",
//       description: "Ye ol' boring shield",
//       level: 1,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot3: null,
//   },
//   {
//     id: 3,
//     class: {
//       id: 1,
//       name: "Wizard",
//       base_health: 150,
//       base_mana: 250,
//       base_power: 50,
//     },
//     nickname: "Jeff's Archer",
//     exp: "1000",
//     health: 230,
//     mana: 320,
//     power: 150,
//     skill_slot1: {
//       id: 1,
//       name: "Fireball",
//       type: "magic",
//       description: "A firey ball",
//       base_power: 100,
//       cost: 50,
//     },
//     skill_slot2: {
//       id: 2,
//       name: "Lightning",
//       type: "magic",
//       description: "A bolty bolt",
//       base_power: 150,
//       cost: 100,
//     },
//     skill_slot3: {
//       id: 3,
//       name: "Healing",
//       type: "magic",
//       description: null,
//       base_power: 20,
//       cost: 100,
//     },
//     consumable_slot1: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     consumable_slot2: {
//       id: 2,
//       name: "Rotten Fish",
//       description: "Makes the user sick.",
//       effect: "-20",
//     },
//     consumable_slot3: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     equipment_slot1: {
//       id: 1,
//       name: "Sword",
//       type: "melee",
//       description: "The standard starter weapon",
//       level: 0,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot2: {
//       id: 2,
//       name: "Shield",
//       type: "defense",
//       description: "Ye ol' boring shield",
//       level: 1,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot3: null,
//   },
//   {
//     id: 4,
//     class: {
//       id: 1,
//       name: "Wizard",
//       base_health: 150,
//       base_mana: 250,
//       base_power: 50,
//     },
//     nickname: "Jeff's Archer",
//     exp: "1000",
//     health: 230,
//     mana: 320,
//     power: 150,
//     skill_slot1: {
//       id: 1,
//       name: "Fireball",
//       type: "magic",
//       description: "A firey ball",
//       base_power: 100,
//       cost: 50,
//     },
//     skill_slot2: {
//       id: 2,
//       name: "Lightning",
//       type: "magic",
//       description: "A bolty bolt",
//       base_power: 150,
//       cost: 100,
//     },
//     skill_slot3: {
//       id: 3,
//       name: "Healing",
//       type: "magic",
//       description: null,
//       base_power: 20,
//       cost: 100,
//     },
//     consumable_slot1: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     consumable_slot2: {
//       id: 2,
//       name: "Rotten Fish",
//       description: "Makes the user sick.",
//       effect: "-20",
//     },
//     consumable_slot3: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     equipment_slot1: {
//       id: 1,
//       name: "Sword",
//       type: "melee",
//       description: "The standard starter weapon",
//       level: 0,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot2: {
//       id: 2,
//       name: "Shield",
//       type: "defense",
//       description: "Ye ol' boring shield",
//       level: 1,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot3: null,
//   },
//   {
//     id: 5,
//     class: {
//       id: 1,
//       name: "Wizard",
//       base_health: 150,
//       base_mana: 250,
//       base_power: 50,
//     },
//     nickname: "Jeff's Archer",
//     exp: "1000",
//     health: 230,
//     mana: 320,
//     power: 150,
//     skill_slot1: {
//       id: 1,
//       name: "Fireball",
//       type: "magic",
//       description: "A firey ball",
//       base_power: 100,
//       cost: 50,
//     },
//     skill_slot2: {
//       id: 2,
//       name: "Lightning",
//       type: "magic",
//       description: "A bolty bolt",
//       base_power: 150,
//       cost: 100,
//     },
//     skill_slot3: {
//       id: 3,
//       name: "Healing",
//       type: "magic",
//       description: null,
//       base_power: 20,
//       cost: 100,
//     },
//     consumable_slot1: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     consumable_slot2: {
//       id: 2,
//       name: "Rotten Fish",
//       description: "Makes the user sick.",
//       effect: "-20",
//     },
//     consumable_slot3: {
//       id: 1,
//       name: "Bread",
//       description: "Recovers 50 health",
//       effect: "+50",
//     },
//     equipment_slot1: {
//       id: 1,
//       name: "Sword",
//       type: "melee",
//       description: "The standard starter weapon",
//       level: 0,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot2: {
//       id: 2,
//       name: "Shield",
//       type: "defense",
//       description: "Ye ol' boring shield",
//       level: 1,
//       quality: 1,
//       base_stat: 1,
//     },
//     equipment_slot3: null,
//   },
// ];

const PartyList = () => {
  const playerDataArr = useSelector((state) => state.generalReducer.characters);


  

  console.log(playerDataArr);
  return (
    <div className="partyListDiv">
      {playerDataArr.map((hero) => (
        <PartyCard key={hero.character_id} hero={hero}  />
      ))}
    </div>
  );
};

export default PartyList;
