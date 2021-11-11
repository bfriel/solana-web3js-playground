import React from "react";

class EpochInfo extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <center>
        <h3>{this.state.count}</h3>
      </center>
    );
  }
}

export default EpochInfo;

// import { useState, useEffect } from "react";
// import { clusterApiUrl, Connection } from "@solana/web3.js";

// export default function EpochInfo() {
//   const [connection, setConnection] = useState(null);
//   const [epochInfo, setEpochInfo] = useState(null);

//   useEffect(() => {
//     setConnection(new Connection(clusterApiUrl("mainnet-beta")));
//   }, []);

//   useEffect(() => {
//     const getEpochInfo = async () => {
//       try {
//         const info = await connection?.getEpochInfo();
//         setEpochInfo(info);
//       } catch (error) {
//         console.log("getEpochInfo error: ", error);
//       }
//     };
//     getEpochInfo();
//     const interval = setInterval(() => getEpochInfo(), 1000);
//     return () => clearInterval(interval);
//   }, [connection]);

//   return (
//     <div>
//       <h6>Epoch Info</h6>
//       <ul>
//         <li>{`Epoch: ${epochInfo?.epoch || "..."}`}</li>
//         <li>{`Slots in Epoch: ${epochInfo?.slotsInEpoch || "..."}`}</li>
//         <li>{`Absolute Slot: ${epochInfo?.absoluteSlot || "..."}`}</li>
//         <li>{`Slot Index: ${epochInfo?.slotIndex || "..."}`}</li>
//         <li>{`Block Height: ${epochInfo?.blockHeight || "..."}`}</li>
//         <li>{`Transaction Count: ${epochInfo?.transactionCount || "..."}`}</li>
//       </ul>
//     </div>
//   );
// }
