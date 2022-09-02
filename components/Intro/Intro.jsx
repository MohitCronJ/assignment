import { Box } from "@mui/material";
import React from "react";

import styles from "./Intro.module.css";

const Intro = ({ data }) => {
  return (
    <Box className={styles.introContainer}>
      <Box className={styles.introBox}>
        <Box className={styles.introText}>{data.description}</Box>
        <Box className={styles.introPicture}>
          <video
            className={styles.videoPlayer}
            width="380"
            height="280"
            controls
          >
            <source src={data.video} type="video/mp4" />
          </video>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
