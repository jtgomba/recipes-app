import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import FoodType from "./FoodType";
import RecipeCard from "./RecipeCard";

import RightArrowIcon from "../assets/assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/assets/icons/left-arrow.png";

import meat from "../assets/assets/food/meat.png";
import fruits from "../assets/assets/food/fruits.png";
import grains from "../assets/assets/food/grains.png";
import milk from "../assets/assets/food/milk.png";
import nuts from "../assets/assets/food/nuts.png";
import poultry from "../assets/assets/food/poultry.png";
import seeds from "../assets/assets/food/seeds.png";
import vegetables from "../assets/assets/food/vegetables.png";
import fish from "../assets/assets/food/fish.png";

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
    { name: "Meat", id: 0, image: meat },
    { name: "Poultry", id: 1, image: poultry },
    { name: "Fish", id: 2, image: fish },
    { name: "Dairy", id: 3, image: milk },
    { name: "Fruits", id: 4, image: fruits },
    { name: "Vegetables", id: 5, image: vegetables },
    { name: "Grains", id: 6, image: grains },
    { name: "Nuts", id: 7, image: nuts },
    { name: "Seeds", id: 8, image: seeds },
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
                image={item.image}
              />
            </Box>
          ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
