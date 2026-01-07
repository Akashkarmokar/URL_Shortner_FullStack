import { Router } from "express";
import authRouters from "./auth.js";
import urlRouters from "./url.js";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRouters);
rootRouter.use("/urls", urlRouters);

export default rootRouter;
