"use server"
import { connectDB } from "@/lib/db/mongodb"
import { User } from "@/lib/db/models/user.model"
import { revalidatePath } from "next/cache"


const ResponseAPI = {
    msg: "",
    data: [],
    status: 'ok'
}
export const getUsers = async () => {
    try {
        await connectDB();
        const users = await User.find();
        if (!users) {
            ResponseAPI.msg = 'Users not found'
            ResponseAPI.status = 'error'
            return ResponseAPI;
        }
        ResponseAPI.msg = 'Users obtained'
        ResponseAPI.data = users
        return ResponseAPI.data;
    } catch (error) {
        console.error("Error getting users: ", error);
    }
}
export const getSingleUser = async (id) => {
    try {
        await connectDB();
        const user = await User.findById(id);
        if (!user) {
            ResponseAPI.msg = 'User not found'
            ResponseAPI.status = 'error'
            return ResponseAPI
        }
        ResponseAPI.msg = 'User obtained';
        ResponseAPI.data = user;
        return ResponseAPI.data
    } catch (error) {
        console.error("Error getting the user: ", error);
    }
}
export const createUser = async (formData) => {
    try {
        const name = formData.get("name")
        const username = formData.get("username")
        const email = formData.get("email")
        await connectDB();
        const newUser = await User.create({
            name,
            username,
            email
        })
        console.log('User created: ', newUser);
        revalidatePath("/user2");
    } catch (error) {
        console.error(error)
    }
}
