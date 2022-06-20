import React from "react";
import {
  Typography,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
  Button,
} from "@mui/material";

const Detail = ({ recipeDetail }) => {
  const { label, calories, ingredients, image, Divider, url } = recipeDetail;
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
      <img src={image} alt={label} loading="lazy" className="detail-image" />
      <Stack direction="column">
        <Typography variant="h4" mb="20px">
          {label}
        </Typography>
        <Button src={url} variant="contained">
          See full recipe
        </Button>
        <Stack
          gap="20px"
          sx={{
            flexDirection: { lg: "row" },
            p: "10px",
            alignItems: "center",
          }}>
          <List
            sx={{ width: "100%", maxWidth: 360 }}
            subheader={
              <>
                <Typography variant="h6">
                  {ingredients.length} Ingredients
                </Typography>
                <Divider />
              </>
            }>
            {ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar src={ingredient.image} />
                </ListItemAvatar>
                <Typography>{ingredient.text}</Typography>
              </ListItem>
            ))}
          </List>
          <List
            subheader={
              <>
                <Typography variant="h6">Nutrition</Typography>
                <Divider />
              </>
            }>
            <ListItem>
              <ListItemText primary="Calories" secondary={calories} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Servings" secondary={recipeDetail.yield} />
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;
