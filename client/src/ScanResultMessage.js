import React from "react";
import { useNavigate } from "react-router-dom";

function ScanResultMessage({ result }) {
  let navigate = useNavigate();
  return <div className="text-3xl mb-10 font-bold">{result}</div>;
}

export default ScanResultMessage;
