import { Request, Response } from "express";
import User from "../models/User";
import { CustomError } from "../utils/customError";

// Roter  /auth
export const register = async (req: Request, res: Response) => {
  const { name, phone } = req.body;
  if (!name || !phone) throw new CustomError(404, "User topilmadi");
  const user = await User.create({ name, phone });
  res.status(200).json({ user });
};
