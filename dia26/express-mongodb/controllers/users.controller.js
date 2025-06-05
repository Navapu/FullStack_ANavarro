import { User } from "../db/models/index.js"

const ResponseAPI = {
    msg: "",
    data: [],
    status: 'ok'
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        if(!users){
            ResponseAPI.msg = 'Users not found'
            ResponseAPI.status = 'error'
            return res.status(404).json(ResponseAPI)
        }
        ResponseAPI.msg = 'Users obtained'
        ResponseAPI.data = users
        res.status(200).json(ResponseAPI)
    } catch (error) {
        next(error)
    }
}

export const createUser = async (req, res, next) => {
    try{
        const {name, username, email} = req.body;
        const newUser = await User.create({
            name: name,
            username: username,
            email: email
        })
        ResponseAPI.msg = `User: ${username} has been created`
        ResponseAPI.data = newUser;
        res.status(200).json(ResponseAPI)
    }catch(error){
        next(error)
    }
}

export const getUserById = async (req, res, next) => {
    try{
        const {id} = req.params
        const user = await User.findById(id);
        if(!user){
            ResponseAPI.msg = 'User not found'
            ResponseAPI.status = 'error'
            return res.status(404).json(ResponseAPI)
        }
        ResponseAPI.msg = 'User obtained';
        ResponseAPI.data = user;
        res.status(200).json(ResponseAPI)
    }catch(error){
        next(error)
    }
}