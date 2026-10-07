const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI =
    "mongodb://task-manager-mongodb:27017/docker-task-manager";

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error(
            "MongoDB connection failed:",
            error.message
        );
    });

app.get("/", (req, res) => {
    res.send("Task Manager Backend is running");
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend is healthy"
    });
});

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
