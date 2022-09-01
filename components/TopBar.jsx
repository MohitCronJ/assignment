import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Divider, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TopBar = () => {
  return (
    <Box className="-topBar--container">
      <Typography variant="body2" sx={{ mr: "400px" }}>
        #FutureReadyHealthcare
        <span className="-topBar--span1"> |</span>
      </Typography>
      <Link href="/">
        <Typography variant="body2" sx={{ marginX: "10px" }}>
          About us
        </Typography>
      </Link>
      <span className="-topBar--span2"> |</span>
      <Link href="/">
        <Typography variant="body2" sx={{ marginX: "10px" }}>
          News
        </Typography>
      </Link>
      <span className="-topBar--span2"> |</span>
      <Link href="/">
        <Typography variant="body2" sx={{ marginX: "10px" }}>
          Careers
        </Typography>
      </Link>
      <Link href="/">
        <Button className="-topBar--button">
          <Typography variant="body2" sx={{ color: "white" }}>
            Contact us
          </Typography>
          <ArrowDropDownIcon sx={{ color: "#fff" }} />
        </Button>
      </Link>
    </Box>
  );
};

export default TopBar;
