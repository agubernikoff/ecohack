import React, { useEffect } from "react";
import * as ScanditSDK from "scandit-sdk";

function Scanner() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  useEffect(() => {
    ScanditSDK.configure(process.env.REACT_APP_SCANDIT_KEY, {
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
          fetch(
            proxyurl +
              `https://api.barcodelookup.com/v3/products?barcode=${scanResult.barcodes[0].data}&formatted=y&key=${process.env.REACT_APP_BARCODE_KEY}`
          ).then((r) => {
            if (r.ok) r.json().then((data) => console.log(data));
          });
        });
      });
    });
  }, []);
  return <div id="scandit-barcode-picker"></div>;
}

export default Scanner;
