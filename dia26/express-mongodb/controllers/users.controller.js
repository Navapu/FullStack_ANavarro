import { User } from "../db/models/index.js"
export const getUsers = async (req, res, next) => {
    try {
        console.log("Getting all the users...")
        const users = await User.find();
        res.status(200).json({
            msg: 'Users from our Database',
            data: users
        })
    } catch (error) {
        next(error)
    }
}