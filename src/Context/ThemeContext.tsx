
import {  useState } from "react";
import { createContext, useContext } from "react";
import type { ReactNode } from "react";


const ThemeContext = createContext({
  theme:"light",
  ChangeTheme: (theme: string) => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

  //state to hold the current theme 

  const [theme, setTheme] = useState("light");

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, ChangeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )

 

}

export const useTheme = () => useContext(ThemeContext);