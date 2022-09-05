import React, { useState } from "react";
import Scanner from "../../Scanner";
import ScanResultMessage from "../../ScanResultMessage";

function Donate({ user }) {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState("");
  const btnStyling = isScanning ? "bg-black" : "bg-light-green"

  function toggleIsScanning() {
    setIsScanning(true);
    setResult("");
  }
  function finishScanning(result) {
    setIsScanning(false);
    setResult(result);
  }
  return (
    <div className="h-full flex items-center justify-center flex-col-reverse">
      <button
        className={`p-14 hover:bg-dark-green duration-300 text-white text-3xl ${btnStyling}`}
        onClick={() => {
          setIsScanning(!isScanning);
          setResult("");
        }}
      >
        {isScanning ? "Finish Scanning" : "Start Scanning"}
      </button>
      {isScanning ? (
          <div className="max-w-lg mb-14">
          <Scanner finishScanning={finishScanning} user={user} />
          </div>
      ) : null}
      {result ? (
        <ScanResultMessage
          result={result}
          toggleIsScanning={toggleIsScanning}
          user={user}
        />
      ) : null}
    </div>
  );
}

export default Donate;
