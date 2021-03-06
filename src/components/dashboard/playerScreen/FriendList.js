import React from "react";
import { FriendCard, FriendCardOffline } from "./FriendCard";
import { useSelector } from "react-redux";

export const FriendList = () => {
  const friendsArr = useSelector((state) => state.generalReducer.friends);

  return (
    <div>
      {friendsArr.map((friend) => {
        if (friend.userStatus === true) {
          return <FriendCard key={friend.id} friend={friend} />;
        }
      })}
    </div>
  );
};

export const FriendListOffline = () => {
  const friendsArr = useSelector((state) => state.generalReducer.friends);

  return (
    <div>
      {friendsArr.map((friend) => {
        if (friend.userStatus === false) {
          return <FriendCardOffline key={friend.id} friend={friend} />;
        }
      })}
    </div>
  );
};
