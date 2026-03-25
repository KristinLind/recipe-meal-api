import express from "express";
import {
  getAllMealPlans,
  getSingleMealPlan,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan
} from "../controllers/mealPlanController.js";

const router = express.Router();

/**
 * #swagger.tags = ['MealPlans']
 * #swagger.summary = 'Get all meal plans'
 */
router.get("/", getAllMealPlans);

/**
 * #swagger.tags = ['MealPlans']
 * #swagger.summary = 'Get a single meal plan by ID'
 */
router.get("/:id", getSingleMealPlan);

/**
 * #swagger.tags = ['MealPlans']
 * #swagger.summary = 'Create a new meal plan'
 * #swagger.requestBody = {
 *   required: true,
 *   content: {
 *     "application/json": {
 *       schema: {
 *         type: "object",
 *         properties: {
 *           day: { type: "string" },
 *           mealType: { type: "string" },
 *           recipeId: { type: "string" },
 *           notes: { type: "string" }
 *         }
 *       }
 *     }
 *   }
 * }
 */
router.post("/", createMealPlan);

/**
 * #swagger.tags = ['MealPlans']
 * #swagger.summary = 'Update a meal plan'
 */
router.put("/:id", updateMealPlan);

/**
 * #swagger.tags = ['MealPlans']
 * #swagger.summary = 'Delete a meal plan'
 */
router.delete("/:id", deleteMealPlan);

export default router;