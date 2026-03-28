export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ message: "Unauthorized" });
}

function validateMealPlan(req, res, next) {
  const { day, mealType, recipeId } = req.body;

  if (!day || !mealType || !recipeId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  next();
}
