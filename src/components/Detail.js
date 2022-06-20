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
  Box,
} from "@mui/material";

const Detail = ({ recipeDetail }) => {
  const { thumbnail_url, name, instructions, sections, nutrition } =
    recipeDetail;
  console.log(recipeDetail);
  return (
    <Box>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "top" }}>
        <img
          src={thumbnail_url}
          alt={name}
          loading="lazy"
          className="detail-image"
        />
        <Stack direction="column">
          <Typography variant="h3">{name}</Typography>
        </Stack>
      </Stack>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "top" }}>
        <List
          sx={{ width: "100%", maxWidth: "360px" }}
          subheader={
            <>
              <Typography variant="h5">Nutrition</Typography>
              <Divider />
            </>
          }>
          <ListItem>
            <ListItemText
              inset={false}
              primary={`Calories: ${nutrition?.calories}kcal`}
              sx={{ color: "black" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              inset={false}
              primary={`Carbohydrates: ${nutrition?.carbohydrates}g`}
              sx={{ color: "black" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              inset={false}
              primary={`Fat: ${nutrition?.fat}g`}
              sx={{ color: "black" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              inset={false}
              primary={`Fiber: ${nutrition?.fiber}g`}
              sx={{ color: "black" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              inset={false}
              primary={`Protein: ${nutrition?.protein}g`}
              sx={{ color: "black" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              inset={false}
              primary={`Sugar: ${nutrition?.sugar}g`}
              sx={{ color: "black" }}
            />
          </ListItem>
        </List>
        <List
          sx={{ width: "100%", maxWidth: "360px" }}
          subheader={
            <>
              <Typography variant="h5">Ingredients</Typography>
              <Divider />
            </>
          }>
          {sections?.map((section) =>
            section.components.map((component, i) => (
              <ListItem key={i}>
                <ListItemText
                  inset={false}
                  primary={component.raw_text}
                  sx={{ color: "black" }}
                />
              </ListItem>
            ))
          )}
        </List>
        <List
          sx={{ width: "100%", maxWidth: "360px" }}
          subheader={
            <>
              <Typography variant="h5">Instructions</Typography>
              <Divider />
            </>
          }>
          {instructions?.map((instruction, i) => (
            <ListItem key={i}>
              <ListItemText
                primary={instruction.position}
                secondary={instruction.display_text}
                sx={{ color: "black" }}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};

export default Detail;
