import { useEffect, useState } from "react";

function LifecycleLogger({ count }) {
  // Mount
  useEffect(() => {
    console.log("✅ Component Mounted");

    return () => {
      console.log("❌ Component Unmounted");
    };
  }, []);

  // Update when count changes
  useEffect(() => {
    if (count !== 0) {
      console.log("🔄 Component Updated with count:", count);
    }
  }, [count]);

  return <h2>Count: {count}</h2>;
}

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setShow(!show)} style={{ marginLeft: "10px" }}>
        {show ? "Unmount" : "Mount"}
      </button>

      {show && <LifecycleLogger count={count} />}
    </div>
  );
}

export default App;
