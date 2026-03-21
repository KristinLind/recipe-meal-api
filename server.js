import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connection.js";
import recipeRoutes from "./routes/recipes.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// LOGGING FIRST (optional but helpful)
app.use("/recipes", (req, res, next) => {
  console.log("HIT /recipes route");
  next();
});

// ROUTES
app.use("/recipes", recipeRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Recipe API is running");
});

// Test route (fine to keep)
app.post("/test", (req, res) => {
  res.send("POST WORKS");
});

// Connect to DB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});