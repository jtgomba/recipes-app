import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
import FoodType from "./FoodType";

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

const HorizontalScrollbar = ({ setFoodType, foodType }) => {
  const pType = [
    { name: "Meat", id: 1 },
    { name: "Poultry", id: 2 },
    { name: "Fish", id: 3 },
    { name: "Dairy", id: 4 },
    { name: "Fruits", id: 5 },
    { name: "Vegetables", id: 6 },
    { name: "Grains", id: 7 },
    { name: "Nuts", id: 8 },
    { name: "Seeds", id: 9 },
  ];

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {pType.map((item) => (
        <Box key={item.id} itemId={item.id} title={item.id} m="0 40px">
          <FoodType item={item} setFoodType={setFoodType} foodType={foodType} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
