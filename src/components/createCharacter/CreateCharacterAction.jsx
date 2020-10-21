import React, { useState } from "react";
import { redirect } from "../../utils/helperFunctions";

export default function CreateCharacterAction() {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const style = () => {
    if (hover) {
      return {
        fontWeight: "bold",
        fontSize: "2rem",
        border: "2px solid green",
        borderRadius: "5px",
      };
    } else {
      return {
        fontWeight: "bold",
        fontSize: "2rem",
        border: "1px solid green",
        borderRadius: "5px",
        margin: "1px",
      };
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    redirect("/createCharacter");
  };
  return (
    <button
      style={style()}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={handleClick}
    >
      Create Character
    </button>
  );
}
