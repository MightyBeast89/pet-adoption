import express from "express";
import { register, login } from "../controllers/auth.js";

const router = express.Router();

router.post("/shelterregister", register);

router.post("/shelterlogin", login);

export default router;
