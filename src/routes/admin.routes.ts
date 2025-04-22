// src/routes/admin.routes.ts
import { Router } from "express";
import { nukeDatabase } from "../controllers/admin.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/admin/killall", asyncHandler(nukeDatabase));

export default router;
