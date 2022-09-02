import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
// import Image from "next/image";

import styles from "./AppBar.module.css";

const AppBar = ({ data }) => {
  return (
    <Box className={styles.appBarContainer}>
      <Box className={styles.appBarLogo} sx={{ ml: 0, mr: 12 }}>
        <img src={data.logoUrl} alt="logo" width="188px" height="55px" />
      </Box>
      {data.menu.map((menu, index) => (
        <Box
          className={styles.appBarList}
          key={index}
          component="span"
          sx={{ m: 2, display: "flex" }}
        >
          <Typography variant="h5">{menu}</Typography>
          <ArrowDropDownIcon sx={{ color: "#ed0677" }} />
        </Box>
      ))}
      <Box
        className={styles.appBarMenu}
        component="span"
        sx={{ m: 2, display: "flex" }}
      >
        <Typography variant="h5">Menu</Typography>
        <ArrowDropDownIcon sx={{ color: "#ed0677" }} />
      </Box>
      <SearchIcon className={styles.appBarSearchIcon} sx={{ ml: 2 }} />
    </Box>
  );
};

export default AppBar;
