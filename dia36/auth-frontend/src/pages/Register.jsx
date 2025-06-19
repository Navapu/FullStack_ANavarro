import { useState } from "react";
import {useNavigate} from 'react-router';
const Register = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: ""
    })
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const BACKEND_API = import.meta.env.VITE_BACKEND_API;
    const {email, name, password} = form;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(`${BACKEND_API}/auth/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            const responseData = await response.json();

            if(!response.ok || responseData.status === "error"){
                throw new Error(responseData.msg)
            }
            console.log(responseData)

            localStorage.setItem('token', responseData.data.token);
            delete responseData.data.token;
            localStorage.setItem('user', JSON.stringify(responseData.data));
            setError(null)
            navigate("/profile")
        }catch(e){
            setError(e.message)
        }
    }
    return ( 
        <div>
            <h1 className="text-2xl font-bold mb-4">I'm Register</h1>

            <form onSubmit={handleSubmit} className="space-y-4" method="POST">
                <input type="email" value={email} name="email" placeholder="Email" onChange={handleChange} className="border border-gray-300 rounded p-2 w-full"/>
                <input type="password" value={password} name="password" placeholder="Password" onChange={handleChange} className="border border-gray-300 rounded p-2 w-full"/>
                <input type="text" value={name} name="name" placeholder="Name" onChange={handleChange} className="border border-gray-300 rounded p-2 w-full"/>
                <button type="submit">Register</button>
            </form>

            {error && <p className="text-red-400">{error}</p>}
        </div>
     );
}
 
export default Register;