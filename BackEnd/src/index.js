import express from "express";
import { PORT } from "./secrets.js";

import rootRouter from "./routes/index.js";

const app = express();

app.use(express.json());
app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
