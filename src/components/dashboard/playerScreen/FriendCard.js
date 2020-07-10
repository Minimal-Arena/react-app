import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const FriendCard = ({ friend }) => {
  return (
    <div className="friendCardContainer">
      <div className="friendCardDiv">
        <div
          className={"statusIcon"}
        />
        <img src="https://i.pravatar.cc/75" className="friendImage" />

        <p>{friend.username}</p>
      </div>
    </div>
  );
};

export const  FriendCardOffline = ({ friend }) => {
    return (
      <div className="friendCardContainer">
        <div className="friendCardDiv">
          <div
            className={ "statusIconOffline"}
          />
          <img src="https://i.pravatar.cc/75" className="friendImage" />
  
          <p>{friend.username}</p>
        </div>
      </div>
    );
  };


