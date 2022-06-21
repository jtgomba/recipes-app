import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import undrawCooking from "../assets/assets/images/undrawCooking.svg";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor={purple[100]}>
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={undrawCooking} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="40px">
          Made by Joel Gomba
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
