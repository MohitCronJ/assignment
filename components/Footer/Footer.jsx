import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./Footer.module.css";

const Footer = ({ data }) => {
  return (
    <Box className={styles.FooterContainer}>
      <Divider sx={{ mb: 5 }} />
      <Box className={styles.FooterBox}>
        <Box className={styles.FooterUpperBox}>
          <Typography sx={{ ml: 5, fontWeight: "200" }} variant="h6">
            © 2022 Indegene. All Rights Reserved.
          </Typography>
          {data.topMenu.map((item, index) => (
            <Typography
              className={styles.FooterTop}
              key={index}
              sx={{ ml: 5, fontWeight: "200" }}
              variant="h6"
            >
              {item.cta}
            </Typography>
          ))}
          <Box className={styles.FooterIcons}>
            <LinkedInIcon sx={{ fontSize: "3rem", ml: 20, mt: -1 }} />
            <InstagramIcon sx={{ fontSize: "3rem", ml: 1, mt: -1 }} />
            <TwitterIcon sx={{ fontSize: "3rem", ml: 1, mt: -1 }} />
            <FacebookIcon sx={{ fontSize: "3rem", ml: 1, mt: -1 }} />
          </Box>
        </Box>
        <Box className={styles.FooterLowerBox}>
          {data.bottomMenu.map((item, index) => (
            <Typography
              key={index}
              variant="h6"
              sx={{ ml: 5, fontWeight: "200" }}
            >
              {item.cta}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
