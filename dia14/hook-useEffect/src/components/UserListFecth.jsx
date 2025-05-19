import { useEffect, useState } from "react";
import usersList from '../mocks/mockUser.json'
const UserListFetch = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [isloading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchUsers()
    }, [page])

    const fetchUsers = async () => {
        try{
            setIsLoading(true)
            // Cleaning up a possible previous error
            setError(null)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`);

            // Verify the answer
            if(!response.ok){
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json()

            setUsers(data)
        }catch(e){
            setError(e.message)
            console.log("Error: ", {e})
        }finally{
            setIsLoading(false)
        }
    }

    const prevPage = () => {
        if(page - 1 < 1){return;};
        setPage(prev => prev - 1)
    }

    const nextPage = () => {
        setPage(prev => prev + 1)
    }
    return (
        <div>
            <h1>UserList</h1>
            {isloading && (<div>Loading data...</div>)}
            {error && (<div>Error loading the data: {error}</div>)}
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
                <div>
                    <button onClick={prevPage} disabled={page === 1}>Previous</button>
                    <button onClick={nextPage} disabled={users.length < 3}>Next</button>
                </div>
            </ul>
        </div>
    );
}

export default UserListFetch;