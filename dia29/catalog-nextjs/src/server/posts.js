"use server"
export const getJsonPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json();
}

export const getJsonPostsWithError = async () => {
    const res = await fetch('https://jsonplaceERRORholder.typicode.com/posts')
    return res.json();
}

export const getJsonSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json();
}
