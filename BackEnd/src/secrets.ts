import dontenv from "dotenv";
dontenv.config({ path: "./.env" });

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET!;
export const FRONTEND_URL = process.env.FRONTEND_URL;
