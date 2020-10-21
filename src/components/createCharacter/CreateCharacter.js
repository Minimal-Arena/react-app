import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses, createNewCharacter } from "../../actions";
const initialCharacterValues = {
  nickname: "",
  class: "",
};
const CreateCharacter = () => {
  const classData = useSelector((state) => state.generalReducer.allClasses);
  const [createCharacterValues, setCreateCharacterValues] = useState(
    initialCharacterValues
  );
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClasses());
  }, []);

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreateCharacterValues({ ...createCharacterValues, [name]: value });
    if (createCharacterValues.nickname.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createCharacterValues.class.length >= 1) {
      dispatch(createNewCharacter(createCharacterValues));
    }
  };

  console.log(classData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="createCharacterFormDiv"
          style={{ justifyContent: "center" }}
        >
          <label>
            Enter nickname
            <input
              className="createCharacterInput"
              name="nickname"
              onChange={handleChanges}
            />
          </label>
          <select
            name="class"
            style={{
              margin: "15px 0 0 10px",
              height: "40px",
              borderRadius: "8px",
            }}
            onChange={handleChanges}
          >
            <option>Selecet A Class</option>
            <option value="1">Wizard</option>
            <option value="2">Brute</option>
            <option value="3">Rouge</option>
          </select>
        </div>
        {classData.map((hero, index) => {
          if (hero.id === parseInt(createCharacterValues.class)) {
            return (
              <div key={hero.id} className="createCharacterContainer">
                <div
                  className="createCharacterDiv"
                  style={{ width: "80%", maxWidth: "750px", minWidth: "650px" }}
                >
                  <button type="submit" disabled={disabled}>
                    CREATE CHARACTER
                  </button>
                  <div className="createCharacterImgDiv">
                    <img
                      src={hero.asset_idle}
                      alt={`A ${hero.name} idly waiting to be created.`}
                    />
                  </div>
                  <h2>{hero.name}</h2>

                  <div className="lowerDiv">
                    <div className="createCharacterStatsDiv">
                      <h4>Stats</h4>
                      <div className="stats">
                        <p>Health:{hero.health} |</p>
                        <p>Power:{hero.power} |</p>
                        <p>Mana:{hero.mana}</p>
                      </div>
                    </div>
                    <div className="createCharacterSkillsDiv">
                      <h4>Skills</h4>
                      <div className="skills">
                        <p>{hero.skill_slot1.name} |</p>
                        <p>{hero.skill_slot2.name} |</p>
                        <p>{hero.skill_slot3.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else return null;
        })}
      </form>
    </div>
  );
};
export default CreateCharacter;
