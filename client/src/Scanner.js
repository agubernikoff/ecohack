import React, { useState, useEffect } from "react";
import * as ScanditSDK from "scandit-sdk";

function Scanner({ finishScanning, user }) {
  const [scanditKey, setScanditKey] = useState("");

  function successfulScan() {
    fetch(`/users/${user.id}`, { method: "PATCH" }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          finishScanning("success");
          console.log(data); //update user & org points???
        });
      } else
        r.json().then((data) => {
          console.log(data);
        });
    });
  }

  useEffect(() => {
    fetch("/scandit").then((r) => {
      if (r.ok) r.json().then((data) => setScanditKey(data.key));
    });
  }, []);

  useEffect(() => {
    if (scanditKey) {
      ScanditSDK.configure(scanditKey, {
        engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x",
      }).then(() => {
        ScanditSDK.BarcodePicker.create(
          document.getElementById("scandit-barcode-picker"),
          {
            playSoundOnScan: true,
            vibrateOnScan: true,
          }
        ).then(function (barcodePicker) {
          // barcodePicker is ready here to be used (rest of the tutorial code should go here)
          const scanSettings = new ScanditSDK.ScanSettings({
            enabledSymbologies: [
              ScanditSDK.Barcode.Symbology.EAN8,
              ScanditSDK.Barcode.Symbology.EAN13,
            ],
            codeDuplicateFilter: 1000, // Minimum delay between duplicate results
          });
          barcodePicker.applyScanSettings(scanSettings);
          barcodePicker.on("scan", (scanResult) => {
            console.log(scanResult);
            fetch("/barcode", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ barcode: scanResult.barcodes[0].data }),
            }).then((r) => {
              if (r.ok) {
                r.json().then((data) => {
                  console.log(data);
                  if (data.products[0].category.includes("Beverage"))
                    successfulScan();
                  else finishScanning("failure");
                });
              }
            });
          });
        });
      });
    }
  }, [scanditKey]);
  return <div id="scandit-barcode-picker"></div>;
}

export default Scanner;
