// import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Container, Paper } from "@material-ui/core";

const Home = () => (
  <div>
    <Head>
      <title>Pitter | Home</title>
    </Head>

    <div className="hero">
      <Container>
        <Paper>
          <h1>Pitter</h1>
        </Paper>
      </Container>
    </div>
  </div>
);

export default Home;
