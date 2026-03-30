import { body, validationResult } from "express-validator";

export const mealPlanValidationRules = () => [
  body("day")
    .notEmpty().withMessage("Day is required")
    .isIn(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"])
    .withMessage("Day must be a valid day of the week"),
  body("mealType")
    .notEmpty().withMessage("Meal type is required")
    .isIn(["Breakfast","Lunch","Dinner","Snack"])
    .withMessage("Meal type must be Breakfast, Lunch, Dinner, or Snack"),
  body("recipeId")
    .notEmpty().withMessage("Recipe ID is required")
    .isMongoId().withMessage("recipeId must be a valid MongoDB ID"),
  body("notes")
    .optional()
    .isString().withMessage("Notes must be a string")
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};