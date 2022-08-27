import * as React from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import useClasses from "../config/useClasses";
import Head from "next/head";
import useStyles from "../styles/styles";
import ChallengeBox from "../components/ChallengeBox";
import challenges from "../public/src/data";

const FrontendMentorChallengesSolutions = () => {
  const classes = useClasses(useStyles);

  return (
    <div role="main">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Typography variant="h1" component="h1" className={classes.mainHeading}>
          Frontend Mentor Challenges
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.description}
        >
          These are my solutions to Frontend Mentor Challenges using Next.JS,
          React and Material UI.
        </Typography>
        <Grid container className={classes.challengesWrapper} spacing={3}>
          {challenges.data.map((challenge_detail, i) => {
            return <ChallengeBox details={challenge_detail} key={i} />;
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default FrontendMentorChallengesSolutions;
