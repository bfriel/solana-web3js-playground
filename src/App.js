import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { code, scope } from "./EpochInfo";

export default function App() {
  return (
    <LiveProvider code={code} scope={scope}>
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
