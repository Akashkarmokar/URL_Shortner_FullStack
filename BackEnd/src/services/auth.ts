import { hashSync, genSaltSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets.js";

export const hashPassword = async (password: string): Promise<string> => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};

export const comparePasswords = (
  password: string,
  hashedPassword: string
): boolean => {
  return compareSync(password, hashedPassword);
};

export const jwt_signed_data = (value: any) => {
  console.log("JWT_SECRET:", JWT_SECRET);
  console.log("Value to sign:", value);
  return jwt.sign(value, JWT_SECRET, { expiresIn: "7d" });
};
