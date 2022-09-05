import React from "react";
import { useNavigate } from "react-router-dom";

function ScanResultMessage({ result }) {
  let navigate = useNavigate();

  result = "Success"

  return <div className="text-3xl mb-10 font-bold">Scan Result: {result}</div>;
}

export default ScanResultMessage;
