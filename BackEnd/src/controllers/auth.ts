import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.client.js";
import {
  hashPassword,
  comparePasswords,
  jwt_signed_data,
} from "../services/auth.js";
import {} from "../../src/secrets.js";

export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (!comparePasswords(password, user.password)) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt_signed_data({ id: user.id, email: user.email });

    return res.status(200).json({ message: "Sign-in successful", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: { email, password: await hashPassword(password) },
    });

    return res
      .status(201)
      .json({ message: "User created successfully", userId: newUser.id });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
