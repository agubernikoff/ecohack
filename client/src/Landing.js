import React, { useState, useEffect } from "react";
import Leaderboard from "./Components/Leaderboard.js";

function Landing() {
  const [users, setUsers] = useState([]);
  useEffect(
    () =>
      fetch("/users").then((r) => r.json().then((users) => setUsers(users))),
    []
  );
  return (
    <div className="m-16">
      {users[0] ? (
        <Leaderboard name="Sitewide Leaderboard" communityUsers={users} />
      ) : null}
    </div>
  );
}

export default Landing;
