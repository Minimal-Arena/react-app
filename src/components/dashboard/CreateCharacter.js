import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses } from "../../actions/";
const initialCharacterValues = {
  nickname: "",
  class: "",
};
const CreateCharacter = () => {
  const [createCharacterValues, setCreateCharacterValues] = useState(
    initialCharacterValues
  );

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCreateCharacterValues({ ...createCharacterValues, [name]: value });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClasses());
  }, []);

  const classData = useSelector((state) => state.generalReducer.allClasses);

  console.log(classData);

  return (
    <div>
      <form>
        {classData.map((hero, index) => {
          if (index === parseInt(createCharacterValues.class)) {
            return (
              <div className="createCharacterContainer">
                <div className="createCharacterDiv">
                  <div className="createCharacterImgDiv">
                    <img src={hero.asset_idle} />
                  </div>
                  <h2>{hero.name}</h2>

                  <div className='lowerDiv'>
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
          }
        })}
        <div className="createCharacterFormDiv">
          <label>
            {" "}
            Enter nickname
            <input className='createCharacterInput' name="nickname" onChange={handleChanges} />
          </label>
          <select name="class" onChange={handleChanges}>
            <option value="0">Wizard</option>
            <option value="1">Brute</option>
            <option value="2">Rouge</option>
          </select>
        </div>
      </form>
    </div>
  );
};
export default CreateCharacter;
