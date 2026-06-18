import Testimonial from "../models/Testimonial.js";
import cloudinary from "../config/cloudinary.js";

export const getTestimonials = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 50;
    const skip = (page - 1) * limit;

    const testimonials = await Testimonial.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Testimonial.countDocuments();

    res.json({
      success: true,
      testimonials,
      page,
      pages: Math.ceil(total / limit),
      total,
    });
  } catch (error) {
    next(error);
  }
};

export const createTestimonial = async (req, res, next) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      const uploaded = await cloudinary.uploader.upload(base64, { folder: "testimonials" });
      imageUrl = uploaded.secure_url;
    }

    const testimonial = await Testimonial.create({
      name: req.body.name,
      review: req.body.review,
      rating: req.body.rating,
      status: req.body.status,
      imageUrl,
    });

    res.status(201).json({ success: true, testimonial });
  } catch (error) {
    next(error);
  }
};

export const deleteTestimonial = async (req, res, next) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const updateTestimonialStatus = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json({ success: true, testimonial });
  } catch (error) {
    next(error);
  }
};