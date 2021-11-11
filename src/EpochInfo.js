import { useState, useEffect } from "react";
import * as web3 from "@solana/web3.js";

export const scope = {
  useState,
  useEffect,
  web3,
};

export const code = `
// Edit me!
function EpochInfo() {
  const [connection, setConnection] = useState(null);
  const [epochInfo, setEpochInfo] = useState(null);

  useEffect(() => {
    setConnection(new web3.Connection(web3.clusterApiUrl("mainnet-beta")));
  }, []);

  useEffect(() => {
    async function getEpochInfo() {
      if (connection) {
        try {
          const info = await connection.getEpochInfo();
          setEpochInfo(info);
        } catch (error) {
          console.log("getEpochInfo error: ", error);
        }
      }
    };

    getEpochInfo();
    const interval = setInterval(() => getEpochInfo(), 1000);
    return () => clearInterval(interval);
  }, [connection]);

  return (
    <div>
      <h2>Epoch Info</h2>
      <ul>
        <li>{\`Epoch: $\{epochInfo ? epochInfo.epoch.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Absolute Slot: $\{epochInfo ? epochInfo.absoluteSlot.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Slots in Epoch: $\{epochInfo ? epochInfo.slotsInEpoch.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Slot Index: $\{epochInfo ? epochInfo.slotIndex.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Block Height: $\{epochInfo ? epochInfo.blockHeight.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Transaction Count: $\{epochInfo ? epochInfo.transactionCount.toLocaleString("en-US") : "..."}\`}</li>
      </ul>
    </div>
  );
};`.trim();
