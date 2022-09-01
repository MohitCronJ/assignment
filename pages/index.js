import React from "react";
import Container from "@mui/material/Container";

import { TopBar, AppBar, Hero, Intro } from "../components";

const Home = () => {
  return (
    <>
      <TopBar />
      <AppBar />
      <Hero />
      <Intro />

      <div>Services</div>
      <div>Whats New</div>
      <div>Careers</div>
      <div>Trusted Partners</div>
      <div>Counter</div>
      <div>Testimonials</div>
      <div>Forms</div>
      <div>Footer</div>
    </>
  );
};

export default Home;
