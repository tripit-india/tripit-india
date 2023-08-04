import express from "express";
import { deleteUser,getAllUser,getSingleUser,updateUser} from "../controllers/userController.js";
const router = express.Router();



// Update a User
router.put("/:id", updateUser);

// Delete a User
router.delete("/:id", deleteUser);

// Get a single User
router.get("/:id", getSingleUser);

// Get all Users
router.get("/", getAllUser);
export default router;