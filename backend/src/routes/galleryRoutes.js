import express from "express";

import protect from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

import { body } from "express-validator";

import { validateRequest } from "../middleware/validate.js";

import {

 getGallery,

 uploadImage,

 deleteImage

}
from "../controllers/galleryController.js";

const router =
express.Router();

router.get(
 "/",
 getGallery
);

router.post(
  "/",
  protect,
  upload.single("image"),
  [
    body("category").isIn(["Bedrooms", "Living Areas", "Community Spaces", "Outdoor Areas"]).withMessage("Invalid category"),
    body("title").optional().trim().escape(),
  ],
  validateRequest,
  uploadImage
);

router.delete(
 "/:id",
 protect,
 deleteImage
);

export default router;