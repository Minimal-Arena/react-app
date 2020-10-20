import React from "react";
import { useDispatch, useSelector } from "react-redux";
import placeholderIMG from "../../../assets/placeholder image.png";

export const FriendCard = ({ friend }) => {
  return (
    <div className="friendCardContainer">
      <div className="friendCardDiv">
        <div className={"statusIcon"} />
        <img
          src="https://i.pravatar.cc/75"
          className="friendImage"
          onError={(e) => (e.target.src = placeholderIMG)}
          alt={`${friend.username} icon`}
        />

        <p>{friend.username}</p>
      </div>
    </div>
  );
};

export const FriendCardOffline = ({ friend }) => {
  return (
    <div className="friendCardContainer">
      <div className="friendCardDiv">
        <div className={"statusIconOffline"} />
        <img
          src="https://i.pravatar.cc/75"
          className="friendImage"
          onError={(e) => (e.target.src = placeholderIMG)}
          alt={`${friend.username} icon`}
        />

        <p>{friend.username}</p>
      </div>
    </div>
  );
};
