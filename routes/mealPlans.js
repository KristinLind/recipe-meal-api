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
 * #swagger.summary = 'Create a meal plan'
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   description: 'Meal plan object',
 *   required: true,
 *   schema: {
 *     day: "Monday",
 *     mealType: "Dinner",
 *     recipeId: "PUT_REAL_RECIPE_ID",
 *     notes: "Family favorite"
 *   }
 * }
 */
router.post("/", createMealPlan);

/**
 * #swagger.tags = ['MealPlans']
 * #swagger.summary = 'Update a meal plan'
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   description: 'Updated meal plan',
 *   required: true,
 *   schema: {
 *     day: "Tuesday",
 *     mealType: "Lunch",
 *     recipeId: "PUT_REAL_RECIPE_ID",
 *     notes: "Updated note"
 *   }
 * }
 */
router.put("/:id", updateMealPlan);

/**
 * #swagger.tags = ['MealPlans']
 * #swagger.summary = 'Delete a meal plan'
 */
router.delete("/:id", deleteMealPlan);

export default router;