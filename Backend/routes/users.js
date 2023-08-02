import express from "express";
import { deleteUser,getAllUser,getSingleUser,updateUser} from "../controllers/userController.js";
const router = express.Router();

import{verifyUser,verifyAdmin} from '../utils/verifyToken.js'

// Update a User
router.put("/:id",verifyUser, updateUser);

// Delete a User
router.delete("/:id",verifyUser, deleteUser);

// Get a single User
router.get("/:id",verifyUser, getSingleUser);

// Get all Users
router.get("/",verifyAdmin, getAllUser);
export default router;