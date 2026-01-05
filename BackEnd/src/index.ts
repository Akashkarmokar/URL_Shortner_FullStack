import type { Express, Request, Response } from "express";
import express from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
