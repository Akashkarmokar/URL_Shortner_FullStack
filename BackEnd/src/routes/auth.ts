import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.js";

const authRouters = Router();

authRouters.post("/signin", signIn);
authRouters.post("/signup", signUp);

export default authRouters;
