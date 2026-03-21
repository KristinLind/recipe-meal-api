import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  cookTime: Number,
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"]
  },
  servings: Number,
  category: String
});

export default mongoose.model("Recipe", recipeSchema);