import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeSwitcher;
