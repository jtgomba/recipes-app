import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchRecipes from "../components/SearchRecipes";
import Recipes from "../components/Recipes";

const Home = () => {
  const [recipes, setRecipes] = useState({});
  const [proteinType, setProteinType] = useState("meat");

  return (
    <Box>
      <HeroBanner />
      <SearchRecipes
        setRecipes={setRecipes}
        proteinType={proteinType}
        setProteinType={setProteinType}
      />
      <Recipes
        setRecipes={setRecipes}
        proteinType={proteinType}
        setProteinType={setProteinType}
      />
    </Box>
  );
};

export default Home;
