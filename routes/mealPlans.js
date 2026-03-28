import express from "express";
import {
  getAllMealPlans,
  getSingleMealPlan,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan
} from "../controllers/mealPlanController.js";
import { ensureAuthenticated } from "../middleware/auth.js";

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

router.post(
  "/",
  /* #swagger.tags = ['MealPlans']
     #swagger.summary = 'Create a meal plan'
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         day: 'Monday',
         mealType: 'Dinner',
         recipeId: '123abc',
         notes: 'Family favorite'
       }
     }
  */
  ensureAuthenticated,
  createMealPlan
);

router.put(
  "/:id",
  /* #swagger.tags = ['MealPlans']
     #swagger.summary = 'Update a meal plan'
     #swagger.parameters['id'] = {
       in: 'path',
       required: true,
       type: 'string'
     }
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         day: 'Tuesday',
         mealType: 'Lunch',
         recipeId: '123abc',
         notes: 'Updated note'
       }
     }
  */
  ensureAuthenticated,
  updateMealPlan
);

/**
 * #swagger.tags = ['MealPlans']
 * #swagger.summary = 'Delete a meal plan'
 */
router.delete("/:id", ensureAuthenticated, deleteMealPlan);

export default router;