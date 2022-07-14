import React from "react";
import {
  Typography,
  Stack,
  List,
  ListItem,
  Divider,
  ListItemText,
  Box,
} from "@mui/material";

const Detail = ({ recipeDetail, youtubeVideos }) => {
  const {
    thumbnail_url,
    name,
    instructions,
    sections,
    nutrition,
    description,
  } = recipeDetail;
  return (
    <Box>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "top" }}>
        <Box sx={{ height: "80%" }}>
          <img
            src={thumbnail_url}
            alt={name}
            loading="lazy"
            className="detail-image"
          />
        </Box>
        <Stack
          direction="column"
          spacing={3}
          sx={{ alignItems: "space-between" }}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="p">{description}</Typography>
          {youtubeVideos && (
            <iframe
              width="100%"
              height="50%"
              src={`https://www.youtube.com/embed/${youtubeVideos[0].video.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen></iframe>
          )}
        </Stack>
      </Stack>
      <Stack
        gap="60px"
        sx={{
          flexDirection: { lg: "row" },
          p: "20px",
          alignItems: "top",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          borderRadius: 2,
        }}>
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
