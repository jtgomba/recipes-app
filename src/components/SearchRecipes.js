import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchRecipes = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { xs: "30px", lg: "44px" } }}
        mb="50px"
        textAlign="center">
        Awesome Recipes <br /> You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { xs: "350px", lg: "800px" },
            backgroundColor: "#FFF",
            borderRadius: "20px",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Seach Recipes"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { xs: "80px", lg: "175px" },
            fontSize: { xs: "14px", lg: "20px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}>
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchRecipes;
