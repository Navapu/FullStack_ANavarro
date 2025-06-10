import { getJsonSinglePost } from "@/server/posts";
import { Card } from "@/components/ui/Card";
const BlogId = async ({ params }) => {
    const { id } = await params;
    const post = await getJsonSinglePost(id);
    return (
        <div className="items-center justify-center h-full flex flex-col p-2">
                <Card title={post.title}>{post.body}</Card>
        </div>
    );
}

export default BlogId;