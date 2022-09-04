import React from "react";
import { useNavigate } from "react-router-dom";

function ScanResultMessage({ result }) {
  let navigate = useNavigate();
  return <div>{result}</div>;
}

export default ScanResultMessage;
