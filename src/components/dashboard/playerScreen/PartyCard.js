import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectCharacter } from "../../../actions/index";
import placeholderImage from "../../../assets/placeholder image.png";

const PartyCard = ({
  hero,
}) => {
  const skill_slot = [];
  const equipment_slot = [];
  const consumable_slot = [];
  if (hero.skill_slot1) {
    skill_slot.push(hero.skill_slot1.name);
  }
  if (hero.skill_slot2) {
    skill_slot.push(hero.skill_slot2.name);
  }
  if (hero.skill_slot3) {
    skill_slot.push(hero.skill_slot3.name);
  }
  if (hero.equipment_slot1) {
    equipment_slot.push(hero.equipment_slot1.name);
  }
  if (hero.equipment_slot2) {
    equipment_slot.push(hero.equipment_slot2.name);
  }
  if (hero.equipment_slot3) {
    equipment_slot.push(hero.equipment_slot3.name);
  }
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
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listName === "Skills") {
      setList(skill_slot);
    } else if (listName === "Equipment") {
      setList(equipment_slot);
    } else if (listName === "Consumables") {
      setList(consumable_slot);
    }
  }, [listName]);

  const changeList = (e) => {
    e.preventDefault();
    setListName(e.target.value);
  };

  const toggleHover = (e) => {
    e.preventDefault();
    setHover(!hover);
  };

  const style = () => {
    if (hover) {
      return {
        border: "2px solid green",
        cursor: "pointer",
      };
    } else {
      return {
        margin: "1.55%",
      };
    }
  };

  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(selectCharacter(hero));
  };
  console.log(hero);

  return (
    <div
      className="partyCardContainer "
      style={style()}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={handleSelect}
    >
      <img
        src={hero.class.asset_idle}
        onError={(e) => (e.target.src = placeholderImage)}
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
        <select style={{ fontWeight: "bold" }} onChange={changeList}>
          {options.map((optionItem, i) => {
            return (
              <option key={i} value={optionItem}>
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
          <p>No {listName} added</p>
        )}
      </div>
    </div>
  );
};

export default PartyCard;
