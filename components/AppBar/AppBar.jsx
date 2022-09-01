import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./AppBar.module.css";
// import Image from "next/image";

const DUMMY_DATA = [
  "Capabilities",
  "Solutions",
  "Technology",
  "Segments",
  "Insights",
];

const AppBar = () => {
  return (
    <Box className={styles.appBarContainer}>
      <Box sx={{ ml: 0, mr: 12 }}>
        <img
          src="https://www.indegene.com/sites/default/files/logo.svg"
          alt="logo"
          width="188px"
          height="55px"
        />
        {/* <Image
          src="https://www.indegene.com/sites/default/files/logo.svg"
          width={188}
          height={55}
        /> */}
      </Box>
      {DUMMY_DATA.map((menu) => (
        <Box component="span" sx={{ m: 2, display: "flex" }}>
          <Typography>{menu}</Typography>
          <ArrowDropDownIcon sx={{ color: "#ed0677" }} />
        </Box>
      ))}
      <SearchIcon sx={{ ml: 2 }} />
    </Box>
  );
};

export default AppBar;
