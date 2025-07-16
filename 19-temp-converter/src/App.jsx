import { useState } from "react";

// Celsius Input Component
function CelsiusInput({ celsius, onCelsiusChange }) {
  return (
    <div>
      <label>Celsius: </label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => onCelsiusChange(e.target.value)}
      />
    </div>
  );
}

// Fahrenheit Input Component
function FahrenheitInput({ fahrenheit, onFahrenheitChange }) {
  return (
    <div>
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(e.target.value)}
      />
    </div>
  );
}

// Main App
function App() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c"); // "c" = Celsius, "f" = Fahrenheit

  // Conversion functions
  const toCelsius = (f) => ((f - 32) * 5) / 9;
  const toFahrenheit = (c) => (c * 9) / 5 + 32;

  const handleCelsiusChange = (value) => {
    setTemperature(value);
    setScale("c");
  };

  const handleFahrenheitChange = (value) => {
    setTemperature(value);
    setScale("f");
  };

  // Convert value based on current scale
  const celsius = scale === "f" ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === "c" ? toFahrenheit(temperature) : temperature;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Temperature Converter</h2>
      <CelsiusInput celsius={celsius} onCelsiusChange={handleCelsiusChange} />
      <FahrenheitInput fahrenheit={fahrenheit} onFahrenheitChange={handleFahrenheitChange} />
    </div>
  );
}

export default App;
