import React from "react";
import { useNavigate } from "react-router-dom";

function ScanResultMessage({ result, toggleIsScanning, user }) {
  let navigate = useNavigate();
  const message =
    result === "success" ? (
      <>
        <h1>SCAN SUCCESS</h1>
        <p>+1 POINT</p>
      </>
    ) : (
      <>
        <h1>SCAN FAIL</h1>
        <p>please try again</p>
      </>
    );
  console.log(user);
  return (
    <div className="text-3xl mb-10 font-bold">
      {message}
      <button onClick={() => navigate(`/leaders`)}>Return to Homepage</button>
      <button onClick={() => toggleIsScanning()}>
        {result === "success" ? "Scan Another" : "Try Again"}
      </button>
    </div>
  );
}

export default ScanResultMessage;
