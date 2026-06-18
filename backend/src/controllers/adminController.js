import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import cloudinary from "../config/cloudinary.js";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";

export const getProfile = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");
    res.json({ success: true, admin });
  } catch (error) {
    next(error);
  }
};

export const updateProfileImage = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.admin.id);

    if (!admin) {
      return res.status(404).json({ success: false });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image required" });
    }

    // old image delete
    if (admin.profileImageId) {
      await cloudinary.uploader.destroy(admin.profileImageId);
    }

    const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    const uploaded = await cloudinary.uploader.upload(base64, { folder: "the-nest-admin" });

    admin.profileImage = uploaded.secure_url;
    admin.profileImageId = uploaded.public_id;

    await admin.save();

    res.json({ success: true, image: uploaded.secure_url });
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.admin.id);

    admin.name = req.body.name;
    admin.email = req.body.email;
    admin.phone = req.body.phone;

    await admin.save();
    res.json({ success: true, admin });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const admin = await Admin.findById(req.admin.id);

    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Old password incorrect" });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    admin.password = hashed;
    await admin.save();

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");

    admin.resetPasswordToken = resetToken;
    admin.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    await admin.save();

    const resetUrl = `http://localhost:5173/admin/reset-password/${resetToken}`;

    const emailTemplate = `
<div style="max-width:650px;margin:auto;background:#ffffff;font-family:Arial,sans-serif;border-radius:20px;overflow:hidden;">
  <div style="background:#355B5E;padding:50px 30px;text-align:center;">
    <h1 style="color:white;margin:0;">The Nest Recovery Homes</h1>
    <p style="color:#dce8e8;">Recovery • Stability • Hope</p>
  </div>
  <div style="padding:40px;">
    <h2 style="color:#355B5E;">Reset Your Password</h2>
    <p style="color:#555;line-height:1.8;">
      We received a request to reset your account password. Click the button below to continue.
    </p>
    <div style="text-align:center;margin:30px 0;">
      <a href="${resetUrl}" style="background:#355B5E;color:white;padding:16px 35px;text-decoration:none;border-radius:10px;display:inline-block;font-weight:bold;">
        Reset Password
      </a>
    </div>
    <p style="color:#777;">This link expires in 15 minutes.</p>
  </div>
</div>
`;

    await sendEmail(admin.email, "Reset Your Password", emailTemplate);
    res.json({ success: true, message: "Reset Link Sent" });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!admin) {
      return res.status(400).json({ success: false, message: "Invalid Token" });
    }

    const hashed = await bcrypt.hash(req.body.password, 10);
    admin.password = hashed;
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpire = undefined;
    await admin.save();

    res.json({ success: true, message: "Password Updated" });
  } catch (error) {
    next(error);
  }
};