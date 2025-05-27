import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
const Context = () => {
    const {login, logout, user} = useContext(UserContext)
    const{theme, setTheme} = useContext(ThemeContext)
    return ( 
        <div style={{backgroundColor:theme}}>
            <h3>I'm Content</h3>
            <p>User: {user}</p>
            <input type="text" value={user} onChange={(e => login(e.target.value))}/>
            <br />
            <button onClick={logout}>Logout</button>
            <br />
            <button onClick={() => setTheme(theme==='tomato'?'lime': 'tomato')}>Change style</button>
        </div>
     );
}
 
export default Context;