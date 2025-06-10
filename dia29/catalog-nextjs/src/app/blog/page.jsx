import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getJsonPosts } from "@/server/posts";
import Link from "next/link"

const Blog = async () => {
    const posts = await getJsonPosts();
    return (
        <div className="items-center justify-center h-full flex flex-col p-2">
            <h1>I'm Blog</h1>
            <ul>
            {posts.map(({ title, id, body }) => (
                <li key={id} className="mb-2">
                    <Card title={title}>{body}</Card>
                    <Link href={`./blog/${id}`}><Button size="sm">View more...</Button></Link>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Blog;