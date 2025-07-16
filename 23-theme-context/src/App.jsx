import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

const Main = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>🌓 Theme Switcher</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default App;
