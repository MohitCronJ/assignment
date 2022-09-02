import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./WhatsNew.module.css";

const WhatsNew = ({ data }) => {
  return (
    <Box className={styles.WhatsNewContainer}>
      <Box className={styles.WhatsNewBox}>
        <Box className={styles.WhatsNewHeading}>
          <Typography
            variant="h4"
            sx={{ ml: 5, fontWeight: 300, fontSize: "30px" }}
          >
            What's New
          </Typography>
        </Box>
        <Box className={styles.WhatsNewPictureBox}>
          <Grid container spacing={0} className={styles.WhatsNewPictureGrid}>
            {data.slice(0, 3).map((item, index) => (
              <Grid key={index} item className={styles.WhatsNewPictureItem}>
                <Box className={styles.WhatsNewPicturePart}>
                  <img
                    src={item.image}
                    alt="articleImg"
                    width="205px"
                    height="200px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Typography variant="h5" sx={{ margin: 2 }}>
                  Sep 2022 | {item.tag}
                </Typography>
                <Typography variant="h4" sx={{ margin: 2, color: "#034ea2" }}>
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatsNew;
