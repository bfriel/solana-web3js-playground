import { useState, useEffect } from "react";
import { Connection, clusterApiUrl } from "@solana/web3.js";

export const scope = {
  useState,
  useEffect,
  Connection,
  clusterApiUrl,
};

export const code = `
// import { Connection, clusterApiUrl } from "@solana/web3.js";

function EpochInfo() {
  const [connection, setConnection] = useState(null);
  const [epochInfo, setEpochInfo] = useState(null);

  useEffect(() => {
    setConnection(new Connection(clusterApiUrl("mainnet-beta")));
  }, []);

  useEffect(() => {
    getEpochInfo();
    const interval = setInterval(() => getEpochInfo(), 1000);
    return () => clearInterval(interval);
  }, [connection]);

  async function getEpochInfo() {
    if (connection) {
      try {
        const info = await connection.getEpochInfo();
        setEpochInfo(info);
      } catch (error) {
        console.log("getEpochInfo error: ", error);
      }
    }
  }

  return (
    <div>
      <h6>Epoch Info</h6>
      <ul>
        <li>{\`Epoch: $\{epochInfo ? epochInfo.epoch.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Slots in Epoch: $\{epochInfo ? epochInfo.slotsInEpoch.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Absolute Slot: $\{epochInfo ? epochInfo.absoluteSlot.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Slot Index: $\{epochInfo ? epochInfo.slotIndex.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Block Height: $\{epochInfo ? epochInfo.blockHeight.toLocaleString("en-US") : "..."}\`}</li>
        <li>{\`Transaction Count: $\{epochInfo ? epochInfo.transactionCount.toLocaleString("en-US") : "..."}\`}</li>
      </ul>
    </div>
  );
};`.trim();
