import { Grid, Typography } from "@mui/material";
import styles from "./Counter.module.css";
import React from "react";

const Counter = ({ title, subTitle }) => {
  return (
    <Grid container className={styles.Counter}>
      <Grid item container className={styles.section1}>
        <Typography variant="body1" className={styles.CounterTitle}>
          {title}
        </Typography>
      </Grid>
      <Grid item container className={styles.section2}>
        <Typography variant="subtitle2" className={styles.CounterSubTitle}>
          {subTitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Counter;
