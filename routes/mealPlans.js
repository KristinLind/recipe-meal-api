import express from "express";
import {
  getAllMealPlans,
  getSingleMealPlan,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan
} from "../controllers/mealPlanController.js";

const router = express.Router();

router.get("/", getAllMealPlans);
router.get("/:id", getSingleMealPlan);
router.post("/", createMealPlan);
router.put("/:id", updateMealPlan);
router.delete("/:id", deleteMealPlan);

export default router;