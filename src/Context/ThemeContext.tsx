import { useState, createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";

// Create a ThemeContext with default values
// Includes the current theme and a placeholder for the theme-changing function

const ThemeContext = createContext({
  theme: "light",
  ChangeTheme: (_theme: string) => {}, 
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  
    
  // Initialize theme from localStorage (if available) or default to "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  // Update <html> attribute and persist theme to localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]); 

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, ChangeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
