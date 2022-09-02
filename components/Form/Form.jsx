import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import styles from "./Form.module.css";
const Form = () => {
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={styles.Form}>
      <Grid item container className={styles.FormSection1}>
        <Typography component="div" className={styles.Heading}>
          Let's chat about #FutureReadyHealthcare
        </Typography>
      </Grid>
      <Grid item container className={styles.FormBox}>
        <Grid item container className={styles.FormSection2}>
          <Grid item className={styles.Left}>
            <Grid item container>
              <TextField
                fullWidth
                className={styles.TextField}
                label="Name*"
                size={media ? "small" : "medium"}
                variant="outlined"
              />
            </Grid>
            <Grid item container>
              <TextField
                className={styles.TextField}
                label="Emai*"
                size={media ? "small" : "medium"}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item container>
              <TextField
                className={styles.TextField}
                label="Comapany*"
                size={media ? "small" : "medium"}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item sx={{ flex: 1, display: "flex" }} className={styles.Right}>
            <TextField
              multiline
              size={media ? "small" : "medium"}
              rows={media ? 1 : 9}
              sx={{ background: "#fff" }}
              className={styles.TextAreaField}
              fullWidth
              label="Message"
            />
          </Grid>
        </Grid>
        <Grid item container className={styles.FormSection3}>
          <FormControl className={styles.FormControl}>
            <RadioGroup
              sx={{ display: "flex", flexDirection: "row" }}
              aria-labelledby="group-label"
              defaultValue="Business Opportunity"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Business Opportunity"
                control={<Radio />}
                label="Business Opportunity"
              />
              <FormControlLabel
                value="Career Opportunity"
                control={<Radio />}
                label="Career Opportunity"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item container className={styles.FormSection4}>
          <Button className={styles.Button}>Submit</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
