import { useState , createContext } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("tomato")

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}