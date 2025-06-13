"use server"
import { connectDB } from "@/lib/db/mongodb"
import { User } from "@/lib/db/models/user.model"
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