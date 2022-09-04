import React, { useState } from "react";
import Scanner from "../../Scanner";
import ScanResultMessage from "../../ScanResultMessage";

function Donate({ user }) {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState("");

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
      {result ? <ScanResultMessage result={result} /> : null}
    </div>
  );
}

export default Donate;
