import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import styles from "./Services.module.css";

const Services = ({ data }) => {
  const servicesArray = [{ ...data }];
  Object.keys(data).forEach(function (key) {
    servicesArray.push(key);
  });
  return (
    <Box className={styles.servicesContainer}>
      <Box className={styles.servicesBox}>
        <Box className={styles.servicesBoxes}>
          <Box>
            <Grid container spacing={2}>
              {servicesArray.slice(2).map((service, index) => (
                <div key={index}>
                  <Grid item lg={6}>
                    <Button
                      sx={{ mb: 2, ml: 2 }}
                      className={styles.servicesButton}
                    >
                      <Typography variant="h5">{service}</Typography>
                    </Button>
                  </Grid>
                </div>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box className={styles.servicesText}>
          <Typography sx={{ fontSize: "3.8rem", fontWeight: "300" }}>
            Enabling Outcomes
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: "1.8rem",
              fontWeight: "300",
              lineHeight: "2.5rem",
            }}
          >
            We understand healthcare organizations need to deliver outcomes
            today, while building capabilities for the future. That's why we
            support you with day-to-day operations across the full life cycle,
            while enabling your vision through conversations with industry peers
            and thought-provoking content.
          </Typography>
          {[
            "Agile Operations",
            "Co-Commercialization",
            "Future Ready Healthcare",
          ].map((item, index) => (
            <div key={index}>
              <Typography
                sx={{
                  fontSize: "18px   ",
                  fontWeight: "300",
                  mt: 3,
                  color: "#FFDE2F",
                  borderBottom: "0.1px solid #FFDE2F",
                }}
              >
                {item}
                <ArrowRightIcon style={{ float: "right" }} />
              </Typography>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
