import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
// import EpochInfo from "./EpochInfo";
import { useState, useEffect } from "react";
import { clusterApiUrl, Connection } from "@solana/web3.js";
// import * as web3 from "@solana/web3.js";
// import { useState, useEffect } from "react";

const epoch = `function EpochInfo() {
  const [connection, setConnection] = useState(null);
  const [epochInfo, setEpochInfo] = useState(null);

  useEffect(() => {
    setConnection(new Connection(clusterApiUrl("mainnet-beta")));
  }, []);

  async function getEpochInfo() {
    try {
      const info = await connection.getEpochInfo();
      setEpochInfo(info);
    } catch (error) {
      console.log("getEpochInfo error: ", error);
    }
  }

useEffect(() => {
  getEpochInfo();
  const interval = setInterval(() => getEpochInfo(), 1000);
  return () => clearInterval(interval);
}, [connection]);

  return (
    <div>
      <h6>Epoch Info</h6>
      <ul>
      <li>{epochInfo ? epochInfo.epoch : "..."}</li>
      <li>{epochInfo ? epochInfo.slotsInEpoch : "..."}</li>
      <li>{epochInfo ? epochInfo.absoluteSlot : "..."}</li>
      <li>{epochInfo ? epochInfo.slotIndex : "..."}</li>
      <li>{epochInfo ? epochInfo.blockHeight : "..."}</li>
      <li>{epochInfo ? epochInfo.transactionCount : "..."}</li>
      </ul>
    </div>
  );
};`.trim();

const scope = {
  useState,
  useEffect,
  clusterApiUrl,
  Connection,
};

export default function App() {
  return (
    <LiveProvider code={epoch} scope={scope}>
      <div style={{ display: "flex" }}>
        <div>
          <LiveEditor />
          <LiveError />
        </div>
        <LivePreview />
      </div>
    </LiveProvider>
  );
}

// export default function App() {
//   return (
//     <div>
//       <EpochInfo />
//     </div>
//   );
// }
