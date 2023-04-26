import express from "express";
import {
  register,
  login,
  petownerregister,
  petownerlogin,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/shelterregister", register);

router.post("/shelterlogin", login);

router.post("/petownerregister", petownerregister);

router.post("/petownerlogin", petownerlogin);

export default router;
