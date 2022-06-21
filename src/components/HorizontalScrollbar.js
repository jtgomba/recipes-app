import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import FoodType from "./FoodType";
import RecipeCard from "./RecipeCard";

import RightArrowIcon from "../assets/assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, setFoodType, foodType, isRecipe }) => {
  const pType = [
    { name: "Meat", id: 0 },
    { name: "Poultry", id: 1 },
    { name: "Fish", id: 2 },
    { name: "Dairy", id: 3 },
    { name: "Fruits", id: 4 },
    { name: "Vegetables", id: 5 },
    { name: "Grains", id: 6 },
    { name: "Nuts", id: 7 },
    { name: "Seeds", id: 8 },
  ];

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {isRecipe
        ? data.map((item) => (
            <Box key={item.id} itemId={item.id} title={item.id} m="0 40px">
              <RecipeCard key={item.id} recipe={item} />
            </Box>
          ))
        : pType.map((item) => (
            <Box key={item.id} itemId={item.id} title={item.id} m="0 40px">
              <FoodType
                item={item}
                setFoodType={setFoodType}
                foodType={foodType}
              />
            </Box>
          ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
