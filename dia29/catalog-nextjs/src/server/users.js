"use server"
const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API
export const getUsers = async () => {
    const res = await fetch(BACKEND_API)
    return res.json();
}

export const getSingleUser = async (id) => {
    const res = await fetch(BACKEND_API + `/${id}`)
    return res.json();
}

export const createUser = async (formData) => {
    const name = formData.get("name")
    const username = formData.get("username")
    const email = formData.get("email")
    const res = await fetch(BACKEND_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, username, email })
    });
    return res.json();
}