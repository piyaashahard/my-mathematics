const express = require("express");
const Subscribe = require("../models/Subscribe");
const router = express.Router();

// Subscribe Route
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const existingSubscription = await Subscribe.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    // Create a new subscription
    const subscription = new Subscribe({ email });
    await subscription.save();

    res.status(201).json({ message: "Subscription successful" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Subscription failed", details: error.message });
  }
});

router.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await Subscribe.find().sort({ subscribedAt: -1 }); // Sort by most recent
    res.json({ subscribers });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch subscribers", error: error.message });
  }
});

// Get Subscriber Count
router.get("/subscribers/count", async (req, res) => {
  try {
    const count = await Subscribe.countDocuments(); // Count the number of subscribers
    res.json({ count });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch subscriber count",
      error: error.message,
    });
  }
});

module.exports = router;
