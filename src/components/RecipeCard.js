import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      className="recipe-card"
      to={`/recipe/${recipe.uri.split("#recipe_")[1]}`}>
      <img src={recipe.image} alt={recipe.label} loading="lazy" />
      <Stack direction="row">
        {recipe.dietLabels.map((label, index) => (
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#ffa9a9",
              fontSize: "16px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
            key={index}>
            {label}
          </Button>
        ))}
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        textTransform="capitalize"
        fontSize="22px">
        {recipe.label}
      </Typography>
    </Link>
  );
};

export default RecipeCard;
