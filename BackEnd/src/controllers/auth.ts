import type { Request, Response } from "express";

export const signIn = (req: Request, res: Response): void => {
  // Placeholder logic for sign-in
  res.status(200).json({ message: "User signed in successfully" });
};
