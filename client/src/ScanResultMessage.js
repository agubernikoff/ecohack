import React from "react";
import { useNavigate } from "react-router-dom";

function ScanResultMessage({ result, toggleIsScanning, user }) {
  let navigate = useNavigate();
  const message =
    result === "success" ? (
      <>
        <h1 className="mb-4 text-4xl text-light-green">SCAN SUCCESS</h1>
        <p className="text-lg">+1 POINT</p>
      </>
    ) : (
      <>
        <h1 className="mb-4 text-4xl text-red-700">SCAN FAIL</h1>
        <p className="text-lg">please try again</p>
      </>
    );
  console.log(user);
  return (
    <div className="text-2xl mb-10 font-bold flex flex-col items-center justify-center bg-white py-16 px-20 shadow-2xl rounded-3xl">
      <div className="mb-8 text-center">{message}</div>
      <div className="flex">
        <button
          className="py-4 px-6 bg-light-green text-white mr-8 hover:bg-dark-green duration-300"
          onClick={() => navigate(`/leaders`)}
        >
          Return to Homepage
        </button>
        <button
          className="py-4 px-6 bg-black text-white mr-8 text-center hover:bg-dark-green duration-300"
          onClick={() => toggleIsScanning()}
        >
          {result === "success" ? "Scan Another" : "Try Again"}
        </button>
      </div>
    </div>
  );
}

export default ScanResultMessage;
