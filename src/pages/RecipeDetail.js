import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import Detail from "../components/Detail.js";
import RecipeVideos from "../components/RecipeVideos.js";
import SimilarRecipes from "../components/SimilarRecipes.js";

import { fetchData, recipeOptions, youtubeOptions } from "../util/fetchData";

const RecipeDetail = () => {
  const [recipeDetail, setRecipeDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeData = async () => {
      const receipeDBUrl = `https://api.edamam.com/api/recipes/v2/${id}`;
      const youtubeURL =
        "https://youtube-search-and-download.p.rapidapi.com/search";
      const recipeData = await fetchData(receipeDBUrl, recipeOptions());
      setRecipeDetail(recipeData.recipe);
      console.log(recipeData.recipe);
      const youtubeData = await fetchData(
        youtubeURL,
        youtubeOptions(recipeData.recipe.label)
      );
    };

    fetchRecipeData();
  }, [id]);

  return (
    <Box>
      <Detail recipeDetail={recipeDetail} />
      <RecipeVideos />
      <SimilarRecipes />
    </Box>
  );
};

export default RecipeDetail;
