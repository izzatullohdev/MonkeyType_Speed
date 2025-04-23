import { Request, Response } from "express";
import User from "../models/User";
import { CustomError } from "../utils/customError";

// Roter  /auth
export const register = async (req: Request, res: Response) => {
  const { name, phone } = req.body;
  if (!name || !phone) throw new CustomError(404, "User topilmadi");
  const existingUser = await User.findOne({ where: { phone } });

  if (existingUser) {
    return res.status(200).json({
      success: false,
      message: "Siz allaqachon ro‘yxatdan o‘tgansiz",
      user: existingUser,
    });
  }
  const newUser = await User.create({ name, phone });

  res.status(201).json({
    success: true,
    message: "Foydalanuvchi ro‘yxatdan o‘tdi",
    user: newUser,
  });
};
