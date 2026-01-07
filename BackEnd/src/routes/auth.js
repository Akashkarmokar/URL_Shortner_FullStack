import { Router } from "express";
import { signIn } from "../controllers/auth.js";

const authRouters = Router();

authRouters.post("/signin", signIn);

export default authRouters;
