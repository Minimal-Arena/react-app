import React, { useState, useEffect } from "react";
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
  const skill_slot = [];
  if (hero.skill_slot1) {
    skill_slot.push(hero.skill_slot1.name);
  }
  if (hero.skill_slot2) {
    skill_slot.push(hero.skill_slot2.name);
  }
  if (hero.skill_slot3) {
    skill_slot.push(hero.skill_slot3.name);
  }
  const equipment_slot = [];
  if (hero.equipment_slot1) {
    equipment_slot.push(hero.equipment_slot1.name);
  }
  if (hero.equipment_slot2) {
    equipment_slot.push(hero.equipment_slot2.name);
  }
  if (hero.equipment_slot3) {
    equipment_slot.push(hero.equipment_slot3.name);
  }
  const consumable_slot = [];
  if (hero.consumable_slot1) {
    consumable_slot.push(hero.consumable_slot1.name);
  }
  if (hero.consumable_slot2) {
    consumable_slot.push(hero.consumable_slot2.name);
  }
  if (hero.consumable_slot3) {
    consumable_slot.push(hero.consumable_slot3.name);
  }
  const options = ["Skills", "Equipment", "Consumables"];
  const [listName, setListName] = useState("skills");
  const [list, setList] = useState(skill_slot);
  const changeList = (e) => {
    e.preventDefault();
    setListName(e.target.value);
  };

  useEffect(() => {
    if (listName === "Skills") {
      setList(skill_slot);
    } else if (listName === "Equipment") {
      setList(equipment_slot);
    } else if (listName === "Consumables") {
      setList(consumable_slot);
    }
  }, [listName]);

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

      {/* TODO: RE-IMPLEMENT THESE FIELDS AS Equipment and Consumables are added to the game */}
      <div className="data">
        <select style={{fontWeight: "bold"}} onChange={changeList}>
          {options.map((optionItem, i) => {
            return (
              <option  key={i} value={optionItem}>
                {optionItem}
              </option>
            );
          })}
        </select>

        {list.length > 0 ? (
          list.map((item, i) => {
            return <p key={i}>{item}</p>;
          })
        ) : (
          <p >No {listName} added</p>
        )}
      </div>
      {/* <div className="data">
        <details>
          <summary>
            <h4>Skills</h4>
          </summary>
          <p>{hero.skill_slot1 ? hero.skill_slot1.name : null}</p>
          <p>{hero.skill_slot2 ? hero.skill_slot2.name : null}</p>
          <p>{hero.skill_slot3 ? hero.skill_slot3.name : null}</p>
        </details>
        <details>
          <summary>Equipment</summary>
          <p>{hero.equipment_slot1 ? hero.equipment_slot1.name : null}</p>
          <p>{hero.equipment_slot2 ? hero.equipment_slot2.name : null}</p>
          <p>{hero.equipment_slot3 ? hero.equipment_slot3.name : null}</p>
        </details>
        <details>
          <summary>Consumables</summary>
          <p>{hero.consumable_slot1 ? hero.consumable_slot1.name : null}</p>
          <p>{hero.consumable_slot2 ? hero.consumable_slot2.name : null}</p>
          <p>{hero.consumable_slot3 ? hero.consumable_slot3.name : null}</p>
        </details>
      </div> */}
    </div>
  );
};

export default PartyCard;
