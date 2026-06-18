import express from "express";

import protect from "../middleware/authMiddleware.js";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate.js";
import {
 createLead,
 getLeads,
 deleteLead,
 updateLead
}
from "../controllers/leadController.js";

const router =
express.Router();

router.post(
  "/",
  [
    body("fullName").notEmpty().withMessage("Full name is required").trim().escape(),
    body("phone").notEmpty().withMessage("Phone is required").trim().escape(),
    body("email").optional({ checkFalsy: true }).isEmail().withMessage("Invalid email").normalizeEmail(),
    body("message").optional().trim().escape(),
  ],
  validateRequest,
  createLead
);

router.get(
  "/",
  protect,
  getLeads
);
router.put(
  "/:id",
  protect,
  [
    body("status").optional().isIn(["New", "Contacted", "Follow Up", "Closed"]).withMessage("Invalid status"),
    body("notes").optional().trim().escape(),
  ],
  validateRequest,
  updateLead
);
router.delete(
  "/:id",
  protect,
  deleteLead
);

export default router;