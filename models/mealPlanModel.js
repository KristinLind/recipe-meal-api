import mongoose from "mongoose";

const mealPlanSchema = new mongoose.Schema({
  day: { type: String, required: true },
  mealType: { type: String, required: true },
  recipeId: {
    type: mongoose.Schema.Types.ObjectId, ref: "Recipe",
    required: true
  },
  notes: String
});

export default mongoose.model("MealPlan", mealPlanSchema);