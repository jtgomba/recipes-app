import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarRecipes = ({ similarRecipes }) => {
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">Similar Recipes</Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {similarRecipes ? (
          <HorizontalScrollbar data={similarRecipes} isRecipe={true} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarRecipes;
