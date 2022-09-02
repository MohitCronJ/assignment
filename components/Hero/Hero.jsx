import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import styles from "./Hero.module.css";

const Hero = ({ data }) => {
  // using only the initial index data as carousel isn't added yet.
  const title = data[0].title.split("<br>");
  const Background = data[0].image;

  return (
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
      }}
      className={styles.heroContainer}
    >
      <Box className={styles.heroBox}>
        {title.map((item, index) => (
          <Typography key={index} variant="h2" className={styles.heroText}>
            {item}
          </Typography>
        ))}
        <Button className={styles.heroButton}>{data[0].cta}</Button>
        <Box className={styles.heroIcons} sx={{ ml: -1, mt: 3 }}>
          <HorizontalRuleIcon sx={{ fontSize: "90px", color: "#034ea2" }} />
          <HorizontalRuleIcon sx={{ fontSize: "90px", color: "#034ea2" }} />
          <HorizontalRuleIcon sx={{ fontSize: "90px", color: "#034ea2" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
