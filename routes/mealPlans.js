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
 * #swagger.tags = ['Recipes']
 * #swagger.summary = 'Update a recipe'
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   description: 'Updated recipe',
 *   required: true,
 *   schema: {
 *     name: "Updated Recipe",
 *     ingredients: ["new"],
 *     instructions: "Updated instructions"
 *   }
 * }
 */
router.put("/:id", recipeValidationRules(), validate, updateRecipe);

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