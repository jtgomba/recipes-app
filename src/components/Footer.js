import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import undrawCooking from "../assets/assets/images/undrawCooking.svg";

const Footer = () => {
  return (
    <Box mt="40px" bgcolor={purple[100]}>
      <Stack alignItems="center">
        <img src={undrawCooking} alt="logo" width="200px" height="20px" />
        <Typography variant="h6">Made by Joel Gomba</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
