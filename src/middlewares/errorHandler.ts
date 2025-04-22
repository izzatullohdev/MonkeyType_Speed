// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/customError";

export const errorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err instanceof CustomError ? err.statusCode : 500;
  const message = err.message || "Internal Server Error";

  console.error(`[ERROR] ${req.method} ${req.originalUrl} - ${message}`);

  res.status(status).json({
    success: false,
    message,
    status,
  });
};
