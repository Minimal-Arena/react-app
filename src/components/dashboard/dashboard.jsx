import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PlayerCard from "./playerScreen/PlayerCard";
import PartyList from "./playerScreen/PartyList";
import { FriendList, FriendListOffline } from "./playerScreen/FriendList";
import { getPlayerData } from "../../actions/index";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = window.localStorage.getItem("user_id");

    dispatch(getPlayerData(id));
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
