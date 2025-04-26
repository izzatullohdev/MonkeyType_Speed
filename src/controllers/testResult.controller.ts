// src/controllers/testResult.controller.ts
import { Request, Response } from "express";
import TestResult from "../models/TestResult";
import User from "../models/User";
import { calculateScore } from "../utils/calculateScore";
import { CustomError } from "../utils/customError";
import { TestResultAttributes, UserAttributes } from "../types/test";
import formatSecondsToMinutes from "../utils/formatSecondsToMinutes";
export const saveTestResult = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const { userId } = req.params;
    const { wpm, raw, consistency, time, accuracy } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      throw new CustomError(404, "User topilmadi");
    }

    const score = calculateScore(wpm, accuracy, consistency);

    const result = await TestResult.create({
      wpm,
      raw,
      consistency,
      time,
      accuracy,
      score,
      userId: user.id,
    });

    return res.status(201).json(result); // ✅ BU YERDA RETURN BO‘LISHI MUHIM
  } catch (error) {
    console.error("Save test result error:", error);
    return res.status(500).json({ message: "Server error" }); // ✅ RETURN QILING
  }
};
interface TestResultWithFormatted extends TestResultAttributes {
  timeFormatted: string;
}

interface UserWithFormattedResults extends Omit<UserAttributes, "TestResults"> {
  TestResults: TestResultWithFormatted[];
}

export const getAllUserResults = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: TestResult,
          attributes: [
            "wpm",
            "raw",
            "consistency",
            "time",
            "accuracy",
            "score",
            "createdAt",
          ],
        },
      ],
      order: [["id", "ASC"]],
    });

    const formattedUsers: UserWithFormattedResults[] = users.map((user) => {
      const userData = user.toJSON() as UserAttributes;

      const testResultsFormatted: TestResultWithFormatted[] =
        userData.TestResults.map((result) => ({
          ...result,
          timeFormatted: formatSecondsToMinutes(result.time),
        }));

      return {
        ...userData,
        TestResults: testResultsFormatted,
      };
    });

    res.status(200).json(formattedUsers);
  } catch (error) {
    console.error("Get results error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
