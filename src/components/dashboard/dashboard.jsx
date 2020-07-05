import React from "react";
import PlayerCard from "./playerScreen/PlayerCard";
import PartyCard from "./playerScreen/PartyCard";
import PartyList from "./playerScreen/PartyList";
import { FriendList, FriendListOffline } from "./playerScreen/FriendList";

const Dashboard = (props) => {
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
        <div className='onlineFriends'>
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

{
  /* <div className="dashboard">
<div className='playerStatsDiv'>
  <h2>Player Stats</h2>
  <PlayerCard />
</div>
<div className="currentPartyDiv">
  <h2>Current Party</h2>
  <PartyList className="partyListComponent" />
</div>
<div className='friendsDiv'>
    <h2>Friends</h2>
    <FriendList/>
</div>
</div> */
}
