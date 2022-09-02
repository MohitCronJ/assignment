import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./Career.module.css";
const Career = ({ data }) => {
  return (
    <Grid container className={styles.CareerHome}>
      <Grid item container className={styles.CareerSection1}>
        <Typography component="div">Careers</Typography>
      </Grid>
      <Grid container className={styles.CareerSection2}>
        <Grid item container className={styles.CareerBox}>
          <Grid item container>
            <Typography variant="body" component="div" className={styles.title}>
              Join the team that's revolutionizing healthcare
            </Typography>
          </Grid>
          <Grid item container>
            <Typography
              variant="subtitle1"
              sx={{ wordWrap: "wrap" }}
              className={styles.description}
            >
              {data.description}
            </Typography>
          </Grid>
          <Grid item container className={styles.buttonGroup}>
            <Button className={styles.buttons}>Learn about our culture</Button>
            <Button className={styles.buttons} variant="contained">
              Explore exciting opportunities
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Career;
