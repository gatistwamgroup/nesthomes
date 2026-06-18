import Gallery from "../models/Gallery.js";
import cloudinary from "../config/cloudinary.js";

/* ==========================
   GET ALL IMAGES
========================== */

export const getGallery = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 50;
    const skip = (page - 1) * limit;

    const images = await Gallery.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Gallery.countDocuments();

    res.json({
      success: true,
      images,
      page,
      pages: Math.ceil(total / limit),
      total,
    });
  } catch (error) {
    next(error);
  }
};

/* ==========================
   UPLOAD IMAGE
========================== */

export const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image selected",
      });
    }

    const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    const uploaded = await cloudinary.uploader.upload(base64, { folder: "the-nest-gallery" });

    const image = await Gallery.create({
      title: req.body.title || "",
      category: req.body.category,
      imageUrl: uploaded.secure_url,
      publicId: uploaded.public_id,
    });

    res.status(201).json({ success: true, image });
  } catch (error) {
    next(error);
  }
};

/* ==========================
   DELETE IMAGE
========================== */

export const deleteImage = async (req, res, next) => {
  try {
    const image = await Gallery.findById(req.params.id);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    await cloudinary.uploader.destroy(image.publicId);
    await Gallery.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};