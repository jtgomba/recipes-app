import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchRecipes from "../components/SearchRecipes";
import Recipes from "../components/Recipes";
import { recipeOptions, fetchData } from "../util/fetchData";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [foodType, setFoodType] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {
      const recipeData = await fetchData(
        "https://tasty.p.rapidapi.com/recipes/list",
        recipeOptions(foodType)
      );
      setIsLoading(true);
      setRecipes(recipeData.results);
    };
    if (foodType) {
      handleSearch();
      setIsLoading(true);
    }
  }, [foodType]);

  useEffect(() => {
    if (recipes.length) {
      setIsLoading(false);
    }
  }, [recipes]);

  return (
    <Box>
      <HeroBanner />
      <SearchRecipes
        setRecipes={setRecipes}
        foodType={foodType}
        setFoodType={setFoodType}
        setIsLoading={setIsLoading}
      />
      <Recipes recipes={recipes} isLoading={isLoading} />
    </Box>
  );
};

export default Home;
