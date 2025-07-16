import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("⏱️ Timer started");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // ✅ Cleanup function
    return () => {
      clearInterval(interval);
      console.log("🛑 Timer stopped & cleaned up");
    };
  }, []);

  return <h2>Timer: {seconds}s</h2>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Stop Timer" : "Start Timer"}
      </button>

      {show && <Timer />}
    </div>
  );
}

export default App;
