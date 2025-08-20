const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user.js");
const productRoutes = require("./routes/product.js");
const orderRoutes = require("./routes/order.js");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint de santé pour Northflank
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);

// Configuration MongoDB avec variables d'environnement
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/shopjsv2";
mongoose.connect(MONGODB_URI);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
