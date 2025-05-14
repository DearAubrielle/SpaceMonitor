const express = require("express");
const cors = require("cors");
const app = express();
const usersRoutes = require("./routes/users");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));

// Mount routes
app.use("/api/users", usersRoutes);

app.listen(8080, () => {
  console.log("Server started on port 8080 index ja");
});
