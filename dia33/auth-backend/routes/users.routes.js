import express from 'express';
import { getUsers, createUser, getUserById, deleteUserById } from "../controllers/users.controller.js";
const router = express.Router()

router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById )
export default router;