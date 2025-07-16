import React, { Suspense, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>🧠 Lazy Load Example</h1>
      <button onClick={() => setShow(true)}>Load Component</button>

      {show && (
        <ErrorBoundary>
          <Suspense fallback={<p>Loading heavy component...</p>}>
            <HeavyComponent />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}
