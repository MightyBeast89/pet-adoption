import express from "express";
import { addpet } from "../controllers/pet.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/addpet", verifyToken, addpet);

export default router;
