import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchRecipes from "../components/SearchRecipes";
import Recipes from "../components/Recipes";
import { recipeOptions, fetchData } from "../util/fetchData";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [foodType, setFoodType] = useState();

  useEffect(() => {
    const handleSearch = async () => {
      const recipeData = await fetchData(
        "https://tasty.p.rapidapi.com/recipes/list",
        recipeOptions(foodType)
      );
      setRecipes(recipeData.results);
    };
    if (foodType) {
      handleSearch();
    }
  }, [foodType]);

  return (
    <Box>
      <HeroBanner />
      <SearchRecipes
        setRecipes={setRecipes}
        foodType={foodType}
        setFoodType={setFoodType}
      />
      <Recipes setRecipes={setRecipes} recipes={recipes} foodType={foodType} />
    </Box>
  );
};

export default Home;
