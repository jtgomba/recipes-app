import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/assets/images/undrawBreakfast.svg";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px">
      <Link to="/">
        <img
          src={Logo}
          alt="plate with breakfast"
          style={{ width: "70px", height: "70px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          style={{ textDecoration: "none", borderBottom: "3px solid #FF2625" }}
          to="/">
          Home
        </Link>
        <a href="#recipes" style={{ textDecoration: "none", color: "#3A1212" }}>
          Recipes
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
