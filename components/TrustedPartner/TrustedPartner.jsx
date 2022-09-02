import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./TrustedPartner.module.css";

const TrustedPartner = ({ data }) => {
  const info = data[0];
  return (
    <Grid container className={styles.TrustedPartner}>
      <Grid item container className={styles.section1}>
        <Typography component="div">Trusted Partner</Typography>
      </Grid>
      <Grid item container className={styles.section2}>
        <Grid item sm={5} md={5} lg={5} className={styles.VideoBox}>
          <video controls width="250">
            <source src={info.video} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          className={styles.CaseStudyBoxGroup}
        >
          <Grid item container className={styles.caseStudy}>
            <Grid item container className={styles.caseStudyTag}>
              Case Study
            </Grid>
            <Grid item container className={styles.caseStudyTitle}>
              {info.resources[0].title}
            </Grid>
          </Grid>
          <Grid item container className={styles.caseStudy}>
            <Grid item container className={styles.caseStudyTag}>
              Case Study
            </Grid>
            <Grid item container className={styles.caseStudyTitle}>
              {info.resources[1].title}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TrustedPartner;
