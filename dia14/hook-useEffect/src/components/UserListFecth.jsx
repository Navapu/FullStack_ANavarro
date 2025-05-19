import { useEffect, useState } from "react";
import usersList from '../mocks/mockUser.json'
const UserListFetch = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            // Verify the answer
            if(!response.ok){
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json()

            setUsers(data)
        }catch(e){
            console.log("Error: ", {e})
        }
    }
    return (
        <div>
            <h1>UserList</h1>
            <ul>
                {
                    users.map(({ id, name, email, website }) => (
                        <li key={id}>
                            <h3>Name: {name}</h3>
                            <p>Email: {email}</p>
                            <p>Web: {website}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default UserListFetch;