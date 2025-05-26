import { useNavigate } from "react-router";
const Logout = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        navigate("/")
    }
    return ( 
        <div>
            <h3>Logout</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
     );
}
 
export default Logout;