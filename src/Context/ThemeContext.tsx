import { useState, createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";

const ThemeContext = createContext({
  theme: "light",
  ChangeTheme: (theme: string) => {}, 
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  
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
