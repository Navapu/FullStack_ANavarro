import { Card } from "@/components/ui/Card";
import { getUsers, createUser } from "@/server/users";
import Link from "next/link"
import { Button } from "@/components/ui/Button";

const Users = async () => {
    const users = await getUsers();
    return (
        <div className="items-center justify-center h-full flex flex-col">
            <h1>I'm Users</h1>
            <ul>
                {users.data.map(({_id, name, username}) => (
                    <li key={_id} className="mb-2">
                        <Card title={name}>{username}</Card>
                        <Link href={`./users/${_id}`}><Button size="sm">View more...</Button></Link>
                    </li>
                ))}
            </ul>
            <form action={createUser} className="max-w-[400px] mx-auto mt-24">
                <input type="text" name="name" placeholder="Name" className="border p-2 m-2 w-full rounded"/>
                <input type="text" name="username" placeholder="Username" className="border p-2 m-2 w-full rounded"/>
                <input type="text" name="email" placeholder="Email" className="border p-2 m-2 w-full rounded"/>

                <Button type="submit">Create Post</Button>

            </form>
        </div>
     );
}
 
export default Users;