import Lead from "../models/Lead.js";

export const getDashboardStats = async (req, res, next) => {
  try {
    const { filter } = req.query;
    let dateFilter = {};
    
    if (filter === '7days') {
      const d = new Date();
      d.setDate(d.getDate() - 7);
      dateFilter = { createdAt: { $gte: d } };
    } else if (filter === 'month') {
      const d = new Date();
      d.setDate(d.getDate() - 30);
      dateFilter = { createdAt: { $gte: d } };
    }

    const totalLeads = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: "New" });
    const followUps = await Lead.countDocuments({ status: "Follow Up" });
    const closed = await Lead.countDocuments({ status: "Closed" });

    const recentActivity = await Lead.find(dateFilter).sort({ updatedAt: -1 }).limit(10);

    res.json({
      success: true,
      totalLeads,
      newLeads,
      followUps,
      closed,
      recentActivity
    });
  } catch (error) {
    next(error);
  }
};