import React from "react";
import { Stack, Typography } from "@mui/material";

const FoodType = ({ item, setFoodType, foodType, image }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="food-card"
      sx={{
        borderTop: foodType === item.name ? "4px solid #ff2625" : "",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setFoodType(item.name);
        document
          .getElementById("recipes")
          .scrollIntoView({ behavour: "smooth" });
      }}>
      <img
        src={image}
        style={{ width: "180px", maxHeight: "180px" }}
        alt={item.name}
      />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212">
        {item.name}
      </Typography>
    </Stack>
  );
};

export default FoodType;
