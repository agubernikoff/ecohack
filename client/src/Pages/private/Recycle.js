import React, { useState } from "react";
import Scanner from "../../Scanner";
import ScanResultMessage from "../../ScanResultMessage";

function Donate({ user }) {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState("");

  function toggleIsScanning() {
    setIsScanning(true);
    setResult("");
  }
  function finishScanning(result) {
    setIsScanning(false);
    setResult(result);
  }
  return (
    <div>
      <button
        onClick={() => {
          setIsScanning(!isScanning);
          setResult("");
        }}
      >
        {isScanning ? "Finish Scanning" : "Start Scanning"}
      </button>
      {isScanning ? (
        <Scanner finishScanning={finishScanning} user={user} />
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
