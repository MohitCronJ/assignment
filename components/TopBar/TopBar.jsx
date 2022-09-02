import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Divider, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./TopBar.module.css";
// import useStyles from "./styles";

const TopBar = ({ data }) => {
  // const classes = useStyles();
  return (
    <Box className={styles.topBarContainer}>
      <Typography
        className={styles.tobBarHashtag}
        variant="h6"
        sx={{ mr: "400px" }}
      >
        #FutureReadyHealthcare
        <span className={styles.topBarSpan1}> |</span>
      </Typography>
      {data.topMenu.slice(0, data.topMenu.length - 1).map((item, index) => (
        <div key={index}>
          <Typography
            className={styles.topBarList}
            variant="h6"
            sx={{ marginX: "10px" }}
          >
            {item} <span className={styles.topBarSpan2}> |</span>
          </Typography>
        </div>
      ))}
      <MenuIcon className={styles.menuButton} />
      <Link href="/">
        <Button className={styles.topBarButton}>
          <Typography variant="h6" sx={{ color: "white" }}>
            {data.topMenu[data.topMenu.length - 1]}
          </Typography>
          <ArrowDropDownIcon sx={{ color: "#fff" }} />
        </Button>
      </Link>
    </Box>
  );
};

export default TopBar;
