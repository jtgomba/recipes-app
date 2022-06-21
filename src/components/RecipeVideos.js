import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

const RecipeVideos = ({ youtubeVideos, name }) => {
  return (
    <Box sx={{ marginTop: { xs: "20px", lg: "100px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: purple[500], textTransform: "capitilize" }}>
          {name}
        </span>{" "}
        Recipe Videos
      </Typography>
      <Stack
        justifyContent="flext-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}>
        {youtubeVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="recipe-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blank"
            rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.tile} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default RecipeVideos;
