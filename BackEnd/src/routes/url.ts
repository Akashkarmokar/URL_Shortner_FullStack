import { Router } from "express";
import { authenticate } from "../middleware/auth.js";
import {
  createUrl,
  listUrls,
  getUrl,
  updateUrl,
  removeUrl,
} from "../controllers/url.js";

const urlRouter = Router();

urlRouter.post("/url-create", authenticate, createUrl);
urlRouter.get("/all", authenticate, listUrls);
urlRouter.get("/:id", authenticate, getUrl);
urlRouter.put("/:id", authenticate, updateUrl);
urlRouter.delete("/delete/:id", authenticate, removeUrl);

export default urlRouter;
