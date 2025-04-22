import { Router } from "express";
const router = Router();
const { register } = require("../controllers/auth.controller");
import { validate } from "../middlewares/validate";
import { registerUserSchema } from "../validation/user.schema";
router.post("/register", validate(registerUserSchema), register);

export default router;
