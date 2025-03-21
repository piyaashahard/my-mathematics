const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const subscribeRoutes = require("./routes/subscribe");
const User = require("./models/User"); // Ensure you have the User model
const multer = require("multer");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// CORS Configuration
const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
app.use(
  cors({
    origin: frontendOrigin,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to My Mathematics Backend!");
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find(); // Adjust based on your User model and database
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Fetch User by ID
app.get("/api/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Find the user by ID in MongoDB
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send user data including image URL
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image, // Assuming 'image' stores the image URL
      private: user.private,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete User by ID
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

app.patch("/api/user/:id/private", async (req, res) => {
  try {
    const { id } = req.params;
    const { private: newPrivacyStatus } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { private: newPrivacyStatus },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ private: updatedUser.private });
  } catch (error) {
    console.error("Error updating privacy status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const storage = multer.memoryStorage(); // Storing the file in memory (no folder)
const upload = multer({ storage: storage });

// Route to upload image and save it in MongoDB
app.post("/api/upload-image/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    // Save the image binary data to MongoDB
    const user = await User.findByIdAndUpdate(
      id,
      {
        image: {
          data: req.file.buffer,
          contentType: req.file.mimetype, // store image MIME type
        },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Error uploading image" });
  }
});

// Route to retrieve the image from MongoDB
app.get("/api/user/image/:id", async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(id).select("image"); // Select only the image field

    if (!user || !user.image) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.contentType(user.image.contentType); // Set the content type to the image's MIME type
    res.send(user.image.data); // Send the binary data as the image response
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ message: "Error fetching image" });
  }
});

app.get("/api/users/images", async (req, res) => {
  try {
    const users = await User.find({}, { _id: 1, image: 1, name: 1 }); // Fetch user IDs, names, and image URLs
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/auth", authRoutes);
app.use("/api", subscribeRoutes);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
