import { useState, useEffect } from "react";
import * as web3 from "@solana/web3.js";

export const scope = {
  useState,
  useEffect,
  web3,
};

export const code = `
// Edit me!
// TODO: Integrate solana wallet adapter to just connect wallet
function GetBalance() {
    const [connection, setConnection] = useState(null);
    const [pubKey, setPubKey] = useState("");
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState("");
  
    useEffect(() => {
      setConnection(new web3.Connection(web3.clusterApiUrl("mainnet-beta")));
    }, []);
  
    useEffect(() => {
      async function getBalance() {
        if (connection && pubKey) {
          try {
            const balance = await connection.getBalance(pubKey);
            setBalance(balance);
          } catch (error) {
            console.log("getBalance error: ", error);
          }
        }
      }
  
      getBalance();
    }, [connection, pubKey]);
  
    const handleAddressInput = (event) => {
      const userInput = event.target.value;
      try {
        const pk = new web3.PublicKey(userInput);
        setPubKey(pk);
        setError("");
      } catch (error) {
        console.log("handleAddressInput error: ", error);
        setError(error.message);
      }
    };
  
    return (
      <div>
        <h2>Get Balance</h2>
        <label htmlFor="address">Solana Address: </label>
        <input id="address" onChange={handleAddressInput} />
        {error ? (
          <p>{error}</p>
        ) : pubKey ? (
          <p>{\`Balance: $\{
            balance / web3.LAMPORTS_PER_SOL
          } SOL ($\{balance} lamports)\`}</p>
        ) : (
            <p>Please enter an address</p>
        )}
      </div>
    );
  }`.trim();
