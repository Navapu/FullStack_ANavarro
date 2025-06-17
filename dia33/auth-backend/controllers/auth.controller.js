import { authUser } from "../db/models/index.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_SECRET } from '../config/config.js'
const ResponseAPI = {
    msg: "",
    data: [],
    status: 'ok'
}
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await authUser.findOne({ email });
        if (!user) {
            ResponseAPI.msg = 'Invalid username or password';
            ResponseAPI.data = []
            ResponseAPI.status = 'error';
            return res.status(401).json(ResponseAPI);
        }
        if (user.password != password) {
            ResponseAPI.msg = 'Invalid username or password';
            ResponseAPI.data = []
            ResponseAPI.status = 'error';
            return res.status(401).json(ResponseAPI);
        }

        const token = jwt.sign({
            userId: user._id,
            name: user.name
        },
            JWT_SECRET,
            {
                expiresIn: '2h'
            }
        );

        ResponseAPI.msg = 'Correct login';
        ResponseAPI.data = {
            id: user._id,
            email: user.email,
            name: user.name,
            token
        };
        ResponseAPI.status = 'ok';
        return res.status(200).json(ResponseAPI);
    } catch (error) {
        next(error);
    }
}
export const registerUser = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;
        const existingUser = await authUser.findOne({ email });
        if (existingUser) {
            ResponseAPI.msg = 'This email is already in use';
            ResponseAPI.data = [];
            ResponseAPI.status = 'error';
            return res.status(400).json(ResponseAPI);
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await authUser.create({
            email,
            password: hashedPassword,
            name
        })

        const token = jwt.sign({
            userId: newUser._id,
            name: newUser.name
        },
            JWT_SECRET,
            {
                expiresIn: '2h'
            }
        );

        ResponseAPI.msg = 'User registered';
        ResponseAPI.data = {
            id: newUser._id,
            email: newUser.email,
            name: newUser.name,
            token
        };
        ResponseAPI.status = "ok"
        return res.status(200).json(ResponseAPI);

    } catch (error) {
        next(error);
    }
}
export const getCurrentUser = async (req, res, next) => {
    try {
        const userId = req.userId;
        const currentUser = await authUser.findById(userId).select('-password');

        if(!currentUser){
            ResponseAPI.msg = 'User not found';
            ResponseAPI.data = []
            ResponseAPI.status = 'error';
            return res.status(401).json(ResponseAPI);
        }
        ResponseAPI.msg = 'User found';
        ResponseAPI.data= currentUser;
        return res.status(200).json(ResponseAPI);

    } catch (error) {
        next(error);
    }
}