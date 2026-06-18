import express from "express";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate.js";

import {
  loginAdmin,
} from "../controllers/authController.js";

const router =
  express.Router();

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please include a valid email").normalizeEmail(),
    body("password").exists().withMessage("Password is required"),
  ],
  validateRequest,
  loginAdmin
);

export default router;