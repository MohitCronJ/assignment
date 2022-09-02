import { Grid } from "@mui/material";
import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import Counter from "./Counter";
import styles from "./CounterHome.module.css";

const Home = ({ data, quote }) => {
  return (
    <Grid container className={styles.CounterHome}>
      <Grid item container className={styles.CounterBox}>
        {data?.map((item, index) => (
          <Counter key={index} title={item.title} subTitle={item.subTitle} />
        ))}
      </Grid>
      <Grid item container>
        <Testimonial quote={quote} />
      </Grid>
    </Grid>
  );
};

export default Home;
