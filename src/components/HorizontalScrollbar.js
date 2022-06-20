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

const HorizontalScrollbar = ({ setProteinType, proteinType }) => {
  const pType = [
    { name: "meat", id: 1 },
    { name: "poultry", id: 2 },
    { name: "fish", id: 3 },
    { name: "dairy", id: 4 },
    { name: "fruits", id: 5 },
    { name: "vegetables", id: 6 },
    { name: "grains", id: 7 },
    { name: "nuts", id: 8 },
    { name: "seeds", id: 9 },
  ];

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {pType.map((item) => (
        <Box key={item.id} itemId={item.id} title={item.id} m="0 40px">
          <FoodType
            item={item}
            setProteinType={setProteinType}
            proteinType={proteinType}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
