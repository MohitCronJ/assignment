import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Testimonial.module.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = ({ quote }) => {
  return (
    <Grid container className={styles.Testimonial}>
      <Grid
        item
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <fieldset className={styles.FieldSet}>
          <legend className={styles.Legend}>{quote.heading}</legend>
          <Grid item container className={styles.ContentBox}>
            <Grid item container className={styles.ContentSection1}>
              <Typography className={styles.Title} component="div">
                <FormatQuoteIcon className={styles.FirstQoute} />
                {quote.title}
                <FormatQuoteIcon className={styles.LastQoute} />
              </Typography>
            </Grid>
            <Grid item container className={styles.ContentSection2}>
              <Grid item container>
                <Typography component="div" className={styles.Name}>
                  - {quote.name}
                </Typography>
              </Grid>
              <Grid item container>
                <Typography component="div" className={styles.Designation}>
                  {quote.designation}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </fieldset>
      </Grid>
    </Grid>
  );
};

export default Testimonial;
