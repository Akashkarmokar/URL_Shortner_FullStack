import type { Express } from "express";

import express from "express";
import { PORT } from "./secrets.js";
import rootRouter from "./routes/index.js";
import { prisma } from "./lib/prisma.client";
import { redirectShortUrl } from "./controllers/url.js";

const app: Express = express();

app.use(express.json());
app.use("/api", rootRouter);

// Public redirect route (short links): http://localhost:PORT/r/:short
app.get("/r/:short", redirectShortUrl);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});