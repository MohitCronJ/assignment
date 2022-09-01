import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Hero = () => {
  return (
    <Box className="-hero--container">
      <Box className="-hero--box">
        <Typography variant="h4" className="-hero--text">
          We enable healthcare
        </Typography>
        <Typography variant="h4" className="-hero--text">
          organizations be
        </Typography>
        <Typography variant="h4" className="-hero--text">
          future ready
        </Typography>
        <Button className="-hero--button">Learn More</Button>
        <Box sx={{ ml: -1, mt: 3 }}>
          <HorizontalRuleIcon sx={{ fontSize: "90px", color: "#034ea2" }} />
          <HorizontalRuleIcon sx={{ fontSize: "90px", color: "#034ea2" }} />
          <HorizontalRuleIcon sx={{ fontSize: "90px", color: "#034ea2" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
