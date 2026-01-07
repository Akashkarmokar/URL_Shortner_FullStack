import { Router } from "express";
import { signIn } from "../controllers/auth.js";

const authRouters: Router = Router();

authRouters.post("/signin", signIn);

export default authRouters;
