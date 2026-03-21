import { body, validationResult } from "express-validator";

export const recipeValidationRules = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Recipe name is required"),

    body("ingredients")
      .isArray({ min: 1 })
      .withMessage("Ingredients must be a non-empty array"),

    body("instructions")
      .notEmpty()
      .withMessage("Instructions are required"),

    body("cookTime")
      .optional()
      .isNumeric()
      .withMessage("Cook time must be a number"),

    body("difficulty")
      .optional()
      .isIn(["Easy", "Medium", "Hard"])
      .withMessage("Difficulty must be Easy, Medium, or Hard"),

    body("servings")
      .optional()
      .isNumeric()
      .withMessage("Servings must be a number"),

    body("category")
      .optional()
      .notEmpty()
      .withMessage("Category cannot be empty"),
  ];
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map(err => err.msg)
    });
  }

  next();
};