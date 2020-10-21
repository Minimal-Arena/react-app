import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayerCard from "./playerScreen/PlayerCard";
import PartyList from "./playerScreen/PartyList";
import { FriendList, FriendListOffline } from "./playerScreen/FriendList";
import { getInitialPlayerData, getPlayerData } from "../../actions/index";
import { setCharacter } from "../../actions/gameActions";
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = window.localStorage.getItem("user_id");
    const selection = window.localStorage.getItem("selectedCharacter");
    if (!selection) {
      dispatch(getInitialPlayerData(id));
    } else {
      console.log(JSON.parse(selection))
      dispatch(getPlayerData({ id, selection: JSON.parse(selection) }));
    }
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div className="playerStatsDiv">
        <PlayerCard />
      </div>
      <div className="currentPartyDiv">
        <h2>Current Party</h2>
        <PartyList className="partyListComponent" />
      </div>
      <div className="friendsDiv">
        <div className="onlineFriends">
          <h2>FRIENDS - ONLINE</h2>
          <FriendList />
        </div>
        <h2 className="offlineFriends">FRIENDS - OFFLINE</h2>
        <FriendListOffline />
      </div>
    </div>
  );
};

export default Dashboard;
