import { useEffect, useState } from "react";

const LocalStorage = () => {
    const [name, setName] = useState(() => {
        return localStorage.getItem("name") || ""
    })
    useEffect(() => {
        localStorage.setItem("name", name)

        return () => {
            localStorage.clear()
        }
    }, [name])
    return (
        <div>
            <h1>LocalStorage</h1>
            <input type="text" value={name} placeholder="Name: " onChange={(e) => setName(e.target.value)} name="name"/>
        </div>
    );
}

export default LocalStorage;