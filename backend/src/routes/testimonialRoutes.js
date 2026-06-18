import express from "express";
import { body } from "express-validator";

import protect from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

import { validateRequest } from "../middleware/validate.js";

import {

 getTestimonials,
 createTestimonial,
 deleteTestimonial,
 updateTestimonialStatus

}
from "../controllers/testimonialController.js";

const router =
express.Router();


router.get(
 "/",
getTestimonials
);

router.post(
  "/",
  protect,
  upload.single("image"),
  [
    body("name").notEmpty().withMessage("Name is required").trim().escape(),
    body("review").notEmpty().withMessage("Review is required").trim().escape(),
    body("rating").optional().isNumeric().withMessage("Rating must be a number"),
    body("status").optional().isIn(["Published", "Hidden"]).withMessage("Invalid status"),
  ],
  validateRequest,
  createTestimonial
);

router.put(
  "/:id/status",
  protect,
  [
    body("status").isIn(["Published", "Hidden"]).withMessage("Invalid status"),
  ],
  validateRequest,
  updateTestimonialStatus
);

router.delete(
 "/:id",
 protect,
 deleteTestimonial
);

export default router;