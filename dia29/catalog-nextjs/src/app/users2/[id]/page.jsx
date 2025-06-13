import { getSingleUser } from "@/server/users2";
import Link from "next/link"
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const UsersId = async ({params}) => {
    const { id } = await params;
    const user = await getSingleUser(id);
    return (
        <div className="items-center justify-center h-full flex flex-col p-2">
            <Card title={user.name}>{user.username}</Card>
            
            <div className="mt-2">
                <Link href={'/users2'} className="m-2"><Button size="sm">Return...</Button></Link>
            </div>
        </div>
    );
}
 
export default UsersId;