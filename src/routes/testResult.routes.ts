// src/routes/testResult.routes.ts
import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import {
  getAllUserResults,
  saveTestResult,
} from "../controllers/testResult.controller";
import { validate } from "../middlewares/validate";
import { testResultSchema } from "../validation/testResult.schema";
const router = Router();

router.post(
  "/results/:userId",
  validate(testResultSchema),
  asyncHandler(saveTestResult)
);
router.get("/results", getAllUserResults);
export default router;
