import { getSingleUser } from "@/server/users";
import Link from "next/link"
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const UsersId = async ({params}) => {
    const { id } = await params;
    const user = await getSingleUser(id);
    return (
        <div className="items-center justify-center h-full flex flex-col p-2">
            <Card title={user.data.name}>{user.data.username}</Card>
            
            <div className="mt-2">
                <Link href={'/users'} className="m-2"><Button size="sm">Return...</Button></Link>
            </div>
        </div>
    );
}
 
export default UsersId;