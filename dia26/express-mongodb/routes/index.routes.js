import express from 'express';
import { getUsers } from "../controllers/users.controller.js";
const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: 'working'})
})

export default router;