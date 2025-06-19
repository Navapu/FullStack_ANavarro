import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Profile = () => {
    const BACKEND_API = import.meta.env.VITE_BACKEND_API;
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null)

    const {user: userContext} = useContext(AuthContext);
    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${BACKEND_API}/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const responseData = await response.json();

            if (!response.ok || responseData.status === "error") {
                throw new Error(responseData.msg);
            }
            setUser(responseData.data);
            setError(null)
        } catch (e) {
            setError(e.message)
        }
    }
    const name = user?.name;
    const email = user?.email;
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    }
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Im' Profile (protected route)</h1>

            <div>
                <p>Welcome: <b>{userContext.name}</b></p>
                <p>Email: <b>{userContext.email}</b></p>

                <button onClick={handleLogout} className="m-3">Logout</button>
            </div>

            {error && <p className="text-red-400">{error}</p>}
        </div>
    );
}

export default Profile;