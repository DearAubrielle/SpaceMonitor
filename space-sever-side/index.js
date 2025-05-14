const express = require("express");
const cors = require("cors");
const app = express();
const usersRoutes = require("./routes/users");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));

// Middleware to log requests to /api/users
app.use("/api/users", (req, res, next) => {
  console.log(`Request to /api/users: ${req.method} ${req.url}`);
  next();
});

// Mount routes
app.use("/api/users", usersRoutes);

app.listen(8080, () => {
  console.log("Server started on port 8080 index ja");
});