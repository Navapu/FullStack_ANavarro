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

export const createUser = async (req, res, next) => {
    try{
        const {name, username, email} = req.body;
        await User.create({
            name: name,
            username: username,
            email: email
        })
        res.status(200).json({
            msg: `User: ${username} has been created`
        })
    }catch(error){
        next(error)
    }
}

export const getUserById = async (req, res, next) => {
    try{
        const {id} = req.params
        const user = await User.findById(id);
        res.status(200).json({
            data: user
        })
    }catch(error){
        next(error)
    }
}