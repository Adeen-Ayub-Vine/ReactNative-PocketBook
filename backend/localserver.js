import express from "express";
import dotenv from "dotenv";
import { initDB } from "./src/config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";
import transactionsRoute from "./src/routes/TransactionRoutes.js";

dotenv.config();

const app = express();

// middleware
// app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});