import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Custom hook to consume the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
