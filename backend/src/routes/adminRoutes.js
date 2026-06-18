import express from "express";

import protect from "../middleware/authMiddleware.js";

import { getProfile, updateProfile, updateProfileImage, changePassword, forgotPassword, resetPassword } from "../controllers/adminController.js";

import upload from "../middleware/uploadMiddleware.js";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate.js";

const router = express.Router();

router.get(
 "/profile",
 protect,
 getProfile
);

router.put(
  "/profile",
  protect,
  [
    body("name").notEmpty().withMessage("Name is required").trim().escape(),
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("phone").optional().trim().escape(),
  ],
  validateRequest,
  updateProfile
);

router.put(
  "/password",
  protect,
  [
    body("oldPassword").notEmpty().withMessage("Old password is required"),
    body("newPassword").isLength({ min: 6 }).withMessage("New password must be at least 6 characters"),
  ],
  validateRequest,
  changePassword
);

router.put(
 "/profile-image",
 protect,
 upload.single("image"),
 updateProfileImage
);


router.post(
  "/forgot-password",
  [
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  ],
  validateRequest,
  forgotPassword
);

router.put(
  "/reset-password/:token",
  [
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  validateRequest,
  resetPassword
);

export default router;