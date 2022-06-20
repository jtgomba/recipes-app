import React, { useState } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";

import RecipeCard from "../components/RecipeCard";

const Recipes = ({ recipes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;

  const paginate = (e, value) => {
    setCurrentPage(value);
    document.getElementById("#recipes").scrollIntoView({ behavour: "smooth" });
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <Box id="#recipes" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center">
        {currentRecipes &&
          currentRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {recipes.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(recipes.length / recipesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Recipes;
