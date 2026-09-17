const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// GET Home Route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// GET Message API
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from my Node.js API"
    });
});

// POST Home Route
app.post("/", (req, res) => {
    const user = req.body;
    console.log(user);

    res.json({
        message: "User received successfully",
        user: user
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});