import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const RecipeCard = ({ recipe }) => {
  return (
    <Link className="recipe-card" to={`/recipe/${recipe.id}`}>
      <img src={recipe.thumbnail_url} alt={recipe.name} loading="lazy" />
      <Stack direction="row">
        {recipe.tags.map((label, index) => {
          if (index < 3)
            return (
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
                {label.display_name}
              </Button>
            );
        })}
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        textTransform="capitalize"
        fontSize="22px">
        {recipe.name}
      </Typography>
    </Link>
  );
};

export default RecipeCard;
