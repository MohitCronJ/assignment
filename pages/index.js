import React from "react";
import Container from "@mui/material/Container";
import ErrorPage from "next/error";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import fetch from "node-fetch";

import {
  TopBar,
  AppBar,
  Hero,
  Intro,
  Services,
  WhatsNew,
  Footer,
  Careers,
  TrustedPartner,
  Testimonial,
  Form,
} from "../components";

import CounterHome from "../components/Counter/CounterHome";

const theme = createTheme({});

const Home = (props) => {
  let data = props.data[0];

  return (
    <ThemeProvider theme={theme}>
      <TopBar data={data.appBar} />
      <AppBar data={data.appBar} />
      <Hero data={data.hero} />
      <Intro data={data.intro} />
      <Services data={data.services} />
      <WhatsNew data={data.whatNew} />
      <Careers data={data.careers} />
      <TrustedPartner data={data.trustedPartner} />
      <CounterHome data={data.counter} quote={data.testimonial} />
      <Form />
      <Footer data={data.footer} />
    </ThemeProvider>
  );
};

export const getServerSideProps = async ({ params, res }) => {
  try {
    const result = await fetch(
      `https://indegenerep.s3.ap-south-1.amazonaws.com/cdn/home.json`
    );
    const data = await result.json();

    return {
      props: { data },
    };
  } catch {
    console.log("error");
  }
};

export default Home;
