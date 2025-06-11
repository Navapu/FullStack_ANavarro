import { getJsonSinglePost } from "@/server/posts";
import { Card } from "@/components/ui/Card";
import Link from "next/link"
import { Button } from "@/components/ui/Button";
import LikeButton from "@/components/LikeButton";

const BlogId = async ({ params }) => {
    const { id } = await params;
    const post = await getJsonSinglePost(id);
    return (
        <div className="items-center justify-center h-full flex flex-col p-2">
            <Card title={post.title}>{post.body}</Card>
            <div className="mt-2">
                <Link href={'/blog'} className="m-2"><Button size="sm">Return...</Button></Link>
                <LikeButton />
            </div>
        </div>
    );
}

export default BlogId;