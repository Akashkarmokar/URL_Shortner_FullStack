import type { Express } from "express";

import express from "express";
import { PORT } from "./secrets.js";
import rootRouter from "./routes/index.js";
import { prisma } from "./lib/prisma.client";

const app: Express = express();

app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
