// import React from "react";
import Head from "next/head";
import HomeMenu from "../src/components/homeMenu";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "../static/style/index";

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Pitter | Home</title>
      </Head>

      <div className={classes.root}>
        <Grid
          container
          direction="column"
          className={classes.hero}
          justify="flex-start"
          alignItems="center"
        >
          <Grid
            item
            direction="column"
            container
            className={classes.titleContainer}
            spacing={1}
          >
            <Grid item>
              <Typography
                variant="h2"
                component="h1"
                className={classes.mainTitle}
                color="primary"
              >
                "Psychedelic" a Tribute to Pitter
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                className={classes.subTitle}
                color="secondary"
              >
                The Life,the Lengend of Patrick Ryan Parkinson
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify="flex-start"
            direction="column"
            className={classes.menuContainer}
          >
            <Grid item>
              <HomeMenu />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
