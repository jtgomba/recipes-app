import React from "react";
import { Stack, Typography } from "@mui/material";
import undrawItem from "../assets/assets/icons/undrawItem.svg";

const FoodType = ({ item, setProteinType, proteinType }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="food-card"
      sx={{
        borderTop: proteinType === item.name ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}>
      <img
        src={undrawItem}
        style={{ width: "180px" }}
        alt="girl looking at phone menu"
      />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212">
        {item.name}
      </Typography>
    </Stack>
  );
};

export default FoodType;
