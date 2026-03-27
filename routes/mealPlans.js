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
 * #swagger.consumes = ['application/json']
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   required: true,
 *   schema: {
 *     type: 'object',
 *     properties: {
 *       day: { type: 'string', example: 'Monday' },
 *       mealType: { type: 'string', example: 'Dinner' },
 *       recipeId: { type: 'string', example: '65f123abc123abc123abc123' },
 *       notes: { type: 'string', example: 'Family favorite' }
 *     }
 *   }
 * }
 */
router.post("/", createMealPlan);

/**
 * #swagger.tags = ['MealPlans']
 * #swagger.summary = 'Update a meal plan'
 * #swagger.consumes = ['application/json']
 * #swagger.parameters['id'] = {
 *   in: 'path',
 *   required: true,
 *   type: 'string'
 * }
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   required: true,
 *   schema: {
 *     type: 'object',
 *     properties: {
 *       day: { type: 'string', example: 'Tuesday' },
 *       mealType: { type: 'string', example: 'Lunch' },
 *       recipeId: { type: 'string', example: '65f123abc123abc123abc123' },
 *       notes: { type: 'string', example: 'Updated note' }
 *     }
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