import { createContext, useContext, useState, useEffect,ReactNode } from "react";

interface ThemeContextType {
  theme: string;
  Toggle: () => void;
}

// Provide a meaningful default value
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  Toggle: () => {}, // A placeholder function
});

export const useTheme = () => {
  return useContext(ThemeContext);
};
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }:ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const Toggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const theme = isDarkMode ? "dark" : "light";
  

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log(theme);
}, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, Toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
