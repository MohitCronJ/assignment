import { Box } from "@mui/material";
import React from "react";

const Intro = () => {
  return (
    <Box className="-intro--container">
      <Box className="-intro--box">
        <Box className="-intro--text">
          We are a technology-led healthcare solutions provider. We combine deep
          industry expertise with fit-for-purpose technology in an agile and
          scalable operating model. Many of the leading global healthcare
          organizations rely on us to deliver effective and efficient clinical,
          medical, and commercial outcomes every day. From strategy to
          execution, we enable healthcare organizations be future ready.
        </Box>
        <Box className="-intro--picture">
          <video width="420" height="240">
            <source
              src="https://indegenerep.s3.ap-south-1.amazonaws.com/videos/indegene-corporate-video.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
