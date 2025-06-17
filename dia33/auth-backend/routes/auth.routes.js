import express from 'express';
import {loginUser, registerUser, getCurrentUser} from '../controllers/auth.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js';
const router = express.Router()

router.post("/login", loginUser);
router.post("/register", registerUser)
router.get("/me", authMiddleware, getCurrentUser)

router.get("/protected", authMiddleware, (req, res) => {
    res.json({
        msg: "This route is protected. You were able to access with a valid token."
    })
})
export default router;