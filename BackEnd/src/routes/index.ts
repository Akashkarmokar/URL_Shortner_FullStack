import { Router } from "express";
import authRouters from "./auth";
import urlRouters from "./url";

const rootRouter = Router();

rootRouter.use("/auth", authRouters);
rootRouter.use("/urls", urlRouters);

export default rootRouter;
