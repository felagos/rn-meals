import axios from "axios";
import { Category } from "../models";

const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export const getCategories = async () => {
  const response = await axios.get<{ categories: Category[] }>(URL);
  return response.data.categories;
}