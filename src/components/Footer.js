import React from "react";
import { Box, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import undrawCooking from "../assets/assets/images/undrawCooking.svg";

const Footer = () => {
  return (
    <Box
      mt="40px"
      bgcolor={purple[100]}
      sx={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
      }}>
      <img src={undrawCooking} alt="logo" height="20px" />
      <Typography variant="p" mx={3}>
        Made by Joel Gomba
      </Typography>
    </Box>
  );
};

export default Footer;
