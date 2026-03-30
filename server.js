import dotenv from "dotenv";
dotenv.config();

import express from "express";
import session from "express-session";
import passport from "./config/passport.js";

import { connectDB } from "./database/connection.js";
import recipeRoutes from "./routes/recipes.js";
import mealPlanRoutes from "./routes/mealPlans.js";

import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./swagger.json"), "utf-8")
);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware FIRST
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  // #swagger.ignore = true
  res.send("Recipe API is running");
});

app.get("/auth/github",
  passport.authenticate("github", {
    scope: ["user:email"],
    session: true
  })
);

app.get("/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/"
  }),
  (req, res) => {
    console.log("USER:", req.user);
    res.redirect("/api-docs");
  }
);

app.get("/profile", (req, res) => {
  res.json(req.user || "Not logged in");
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

// Logging BEFORE routes
app.use("/recipes", (req, res, next) => {
  console.log("HIT /recipes route");
  next();
});

// Routes
app.use("/recipes", recipeRoutes);
app.use("/mealplans", mealPlanRoutes);

// Swagger LAST
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to DB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});