import express from 'express';
import {loginUser, registerUser, getCurrentUser} from '../controllers/auth.controller.js'
const router = express.Router()

router.post("/login", loginUser);
router.post("/register", registerUser)
router.get("/me", getCurrentUser)

router.get("/protected", (req, res) => {
    res.json({
        msg: "This route is protected. You were able to access with a valid token."
    })
})
export default router;