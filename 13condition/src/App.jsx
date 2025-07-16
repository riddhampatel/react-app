import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Conditional Rendering Demo</h2>
      <button onClick={toggle}>
        {show ? "Hide" : "Show"} Message
      </button>

      {/* Using short-circuit */}
      {show && <p style={{ marginTop: "20px" }}>Hello! You toggled me. 😊</p>}
    </div>
  );
}

export default App;
