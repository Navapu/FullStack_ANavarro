import { Card } from "@/components/ui/Card";
import { getUsers } from "@/server/users2";
import Link from "next/link"
const Users2 = async () => {
    const users = await getUsers();
    return (
        <div className="items-center justify-center h-full flex flex-col">
            <h1>I'm Users 2 (MONGODB - NEXTJS)</h1>
            <ul className="grid grid-cols-3 gap-2 p-2">
                {users.map(({_id, name, username}) => (
                    <li key={_id} className="mb-2">
                        <Link href={`./users2/${_id}`}>
                        <Card title={name}>{username}</Card>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Users2;