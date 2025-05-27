import { useState , createContext } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState("Navapu");

    const login = (name) => {setUser(name)}
    const logout = () => {setUser("")}
    return(
        <UserContext.Provider value={{user, login,logout}}>
            {children}
        </UserContext.Provider>
    )
}