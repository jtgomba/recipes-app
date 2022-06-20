import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import HeroBannerImage from "../assets/assets/images/undrawHeroBanner.svg";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  padding: 10,
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px">
      <Typography color={purple[500]} fontWeight="600" fontSize="26px">
        Recipe Heaven
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { xs: "40px", lg: "44px" } }}
        mb="23px"
        mt="30px">
        Find Inspiration <br /> With Ease!
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Find your next meal from a database that has over <br /> 2 million
        recipes and more everyday!
      </Typography>
      <ColorButton variant="contained" href="#exercises">
        Explore Recipes
      </ColorButton>
      <Typography
        fontWeight="600"
        color={purple[500]}
        sx={{
          opacity: 0.1,
          display: { xs: "none", lg: "block" },
        }}
        fontSize="200px">
        Recipes
      </Typography>
      <img
        src={HeroBannerImage}
        alt="girl shopping"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
