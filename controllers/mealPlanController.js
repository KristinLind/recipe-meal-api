import MealPlan from "../models/mealPlanModel.js";

// GET all meal plans
export const getAllMealPlans = async (req, res) => {
  try {
    const plans = await MealPlan.find().populate("recipeId");
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving meal plans", error: err.message });
  }
};

// GET single meal plan
export const getSingleMealPlan = async (req, res) => {
  try {
    const plan = await MealPlan.findById(req.params.id).populate("recipeId");

    if (!plan) {
      return res.status(404).json({ message: "Meal plan not found" });
    }

    res.status(200).json(plan);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID format", error: err.message });
  }
};

// POST
export const createMealPlan = async (req, res) => {
  try {
    const newPlan = new MealPlan(req.body);
    const saved = await newPlan.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Error creating meal plan", error: err.message });
  }
};

// PUT
export const updateMealPlan = async (req, res) => {
  try {
    const updated = await MealPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Meal plan not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: "Error updating meal plan", error: err.message });
  }
};

// DELETE
export const deleteMealPlan = async (req, res) => {
  try {
    const deleted = await MealPlan.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Meal plan not found" });
    }

    res.status(200).json({ message: "Meal plan deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid ID format", error: err.message });
  }
};