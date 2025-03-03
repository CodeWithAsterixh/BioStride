import { useTheme } from "../../contexts/useTheme";
import { Sun, Moon } from "lucide-react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border-none rounded-full  dark:bg-gray-800 text-[#56bbe3] dark:text-white transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggler;
