import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""    
    })

    const [error, setError] = useState(null)
    const {login} = useContext(AuthContext);

    const handleChange = (e) => {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const {email, password} = form;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await login(form)
        }catch(e){
            setError(e.message)
        }
    }
    return ( 
        <div>
            <h1 className="text-2xl font-bold mb-4">I'm Login</h1>

            <form onSubmit={handleSubmit} className="space-y-4" method="POST">
                <input type="email" value={email} name="email" placeholder="Email" onChange={handleChange} className="border border-gray-300 rounded p-2 w-full"/>
                <input type="password" value={password} name="password" placeholder="Password" onChange={handleChange} className="border border-gray-300 rounded p-2 w-full"/>
                <button type="submit">Login</button>
            </form>

            {error && <p className="text-red-400">{error}</p>}
        </div>
     );
}
 
export default Login;