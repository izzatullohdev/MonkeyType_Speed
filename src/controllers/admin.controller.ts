// src/controllers/admin.controller.ts
import { Request, Response } from "express";
import User from "../models/User";
import TestResult from "../models/TestResult";

const ADMIN_LOGIN = "holid27";
const ADMIN_PASSWORD = "0507"; // ❗ realda .env ga qo‘yish kerak

export const nukeDatabase = async (req: Request, res: Response) => {
  const { admin, password } = req.body;

  if (admin !== ADMIN_LOGIN || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Unauthorized. Admin data wrong." });
  }

  try {
    await TestResult.destroy({ where: {} }); // ❌ barcha testlarni o‘chir
    await User.destroy({ where: {} }); // ❌ barcha userlarni o‘chir

    return res.status(200).json({
      success: true,
      message: "All users and test results have been nuked 💣",
    });
  } catch (error) {
    console.error("Nuke failed:", error);
    return res.status(500).json({ message: "Server error while nuking." });
  }
};
