import { Router } from "express";
import authRouters from "./auth.js";

const rootRouter = Router();

rootRouter.use("/auth", authRouters);

export default rootRouter;
