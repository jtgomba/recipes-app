import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import Detail from "../components/Detail.js";
import RecipeVideos from "../components/RecipeVideos.js";
import SimilarRecipes from "../components/SimilarRecipes.js";

import {
  fetchData,
  getOneRecipe,
  youtubeOptions,
  getSimilar,
} from "../util/fetchData";

const RecipeDetail = () => {
  const [recipeDetail, setRecipeDetail] = useState({});
  const [youtubeVideos, setYoutubeVideos] = useState({});
  const [similarRecipes, setSimilarRecipes] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeData = async () => {
      const receipeDBUrl = "https://tasty.p.rapidapi.com/recipes/get-more-info";
      const youtubeURL =
        "https://youtube-search-and-download.p.rapidapi.com/search";
      const recipeData = await fetchData(receipeDBUrl, getOneRecipe(id));
      setRecipeDetail(recipeData);
      const youtubeData = await fetchData(
        youtubeURL,
        youtubeOptions(recipeData.name)
      );
      setYoutubeVideos(youtubeData);

      const similarRecipesData = await fetchData(
        "https://tasty.p.rapidapi.com/recipes/list-similarities",
        getSimilar(id)
      );
      setSimilarRecipes(similarRecipesData);
    };

    fetchRecipeData();

    document.getElementById("navbar").scrollIntoView({ behavour: "smooth" });
  }, [id]);

  if (!youtubeVideos) return "Loading...";
  return (
    <Box>
      <Detail recipeDetail={recipeDetail} />
      <RecipeVideos
        youtubeVideos={youtubeVideos.contents}
        name={recipeDetail.name}
      />
      <SimilarRecipes similarRecipes={similarRecipes.results} />
    </Box>
  );
};

export default RecipeDetail;
