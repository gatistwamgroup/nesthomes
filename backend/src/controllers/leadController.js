import Lead from "../models/Lead.js";
import sendEmail from "../utils/sendEmail.js";

export const createLead = async (req, res, next) => {
  try {
    const { fullName, phone, email, message, source } = req.body;
    
    const lead = await Lead.create({
      fullName,
      phone,
      email,
      message,
      source: source || "Website Form"
    });

    // Send email notification to Admin
    try {
      const emailTemplate = `
      <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;border:1px solid #ddd;border-radius:10px;padding:20px;">
        <h2 style="color:#355B5E;text-align:center;">New Lead / Inquiry Received!</h2>
        <p>You have received a new submission from the website.</p>
        <ul style="list-style:none;padding:0;font-size:16px;">
          <li style="margin-bottom:8px;"><strong>Name:</strong> ${fullName}</li>
          <li style="margin-bottom:8px;"><strong>Email:</strong> ${email}</li>
          <li style="margin-bottom:8px;"><strong>Phone:</strong> ${phone}</li>
          <li style="margin-bottom:8px;"><strong>Source:</strong> ${source || "Website Form"}</li>
        </ul>
        <div style="background:#f9f9f9;padding:15px;border-left:4px solid #355B5E;margin-top:15px;font-size:15px;white-space:pre-wrap;">
          <strong>Message:</strong><br/>
          ${message}
        </div>
      </div>
      `;
      await sendEmail(process.env.EMAIL_USER, `New Lead: ${fullName}`, emailTemplate);
    } catch (emailError) {
      console.log("Email Notification Failed:", emailError);
    }

    // Emit real-time notification to all connected admins
    const io = req.app.get("io");
    if (io) {
      io.emit("new_lead", {
        message: `New lead from ${fullName}`,
        lead
      });
    }

    res.status(201).json({
      success: true,
      lead,
    });
  } catch (error) {
    next(error);
  }
};

export const getLeads = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 50;
    const skip = (page - 1) * limit;

    const leads = await Lead.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: "New" });
    const followUps = await Lead.countDocuments({ status: "Follow Up" });
    const closed = await Lead.countDocuments({ status: "Closed" });

    res.json({
      success: true,
      leads,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalRecords: total
      },
      stats: {
        totalLeads: total,
        newLeads,
        followUps,
        closed
      }
    });
  } catch (error) {
    next(error);
  }
};

export const deleteLead = async (req, res, next) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const updateLead = async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      res.status(404);
      throw new Error("Lead not found");
    }

    if (req.body.status) lead.status = req.body.status;
    if (req.body.notes !== undefined) lead.notes = req.body.notes;
    if (req.body.followUpDate) lead.followUpDate = req.body.followUpDate;

    lead.lastContacted = new Date();
    lead.activity.push({
      action: `Status changed to ${lead.status}`,
      date: new Date(),
    });

    await lead.save();

    res.json({
      success: true,
      lead,
    });
  } catch (error) {
    next(error);
  }
};