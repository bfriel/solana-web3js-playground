import { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { code as EpochInfoCode, scope as EpochInfoScope } from "./EpochInfo";
import { code as GetBalanceCode, scope as GetBalanceScope } from "./GetBalance";

export default function App() {
  const [example, setExample] = useState({
    code: EpochInfoCode,
    scope: EpochInfoScope,
  });
  return (
    <LiveProvider code={example.code} scope={example.scope}>
      <div>
        <h1>Solana Web3.js Playground</h1>
        <p>
          This is a proof of concept. I'm experimenting with creating bite-sized
          examples for{" "}
          <a href="https://solana-labs.github.io/solana-web3.js/">
            Solana's Web3.js library
          </a>{" "}
          that can be edited by end users in real-time.
        </p>
        <p>
          I've intentionally not done any styling yet during this proof of
          concept. In addition to adding more examples, the next areas of focus
          would include:
        </p>
        <ul>
          <li>
            Integrating examples with the{" "}
            <a href="https://github.com/solana-labs/wallet-adapter">
              Solana Wallet Adapter
            </a>
          </li>
          <li>Adding a small conceptual writeup for each example</li>
        </ul>
        <p>
          If you have feedback please connect with me on{" "}
          <a href="https://twitter.com/bfriel_">Twitter</a>.
        </p>
      </div>
      <button
        onClick={() =>
          setExample({
            code: EpochInfoCode,
            scope: EpochInfoScope,
          })
        }
      >
        Show Epoch Info Example
      </button>
      <button
        onClick={() =>
          setExample({
            code: GetBalanceCode,
            scope: GetBalanceScope,
          })
        }
      >
        Show Get Balance Example
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            background: "#22272e",
            caretColor: "#fff",
            marginTop: "24px",
            marginRight: "16px",
          }}
        >
          <LiveEditor />
        </div>
        <LiveError />
        <LivePreview />
      </div>
    </LiveProvider>
  );
}
