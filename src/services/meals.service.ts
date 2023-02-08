import axios from "axios";
import { Category, Meal, MealDetail } from "../models";

const URL_BASE = 'https://www.themealdb.com/api/json/v1/1';
const URL_CATEGORIES = `${URL_BASE}/categories.php`;
const URL_MEALS = `${URL_BASE}/filter.php`;
const URL_DETAILS = `${URL_BASE}/lookup.php`;

export const getCategories = async () => {
  const response = await axios.get<{ categories: Category[] }>(URL_CATEGORIES);
  return response.data.categories;
}
 
export const getMealsByCategory = async (category: string) => {
  const response = await axios.get<{ meals: Meal[] }>(`${URL_MEALS}?c=${category}`);
  return response.data.meals;
}

export const getMealDetails = async (mealId: string) => {
  const response = await axios.get<{ meals: MealDetail[] }>(`${URL_DETAILS}?i=${mealId}`);
  return response.data.meals[0];
}
