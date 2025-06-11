import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getJsonPosts, createPost } from "@/server/posts";
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

            <h3>Create Post</h3>
            <form action={createPost} className="max-w-[400px] mx-auto mt-24">
                <input type="text" name="title" placeholder="title" className="border p-2 m-2 w-full rounded"/>
                <textarea name="content" className="border p-2 m-2 w-full rounded"></textarea>
                <Button type="submit">Create Post</Button>

            </form>
        </div>
    );
}

export default Blog;