import * as React from "react";
import { Box, Typography, Grid, Tooltip } from "@mui/material";
import useClasses from "../config/useClasses";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import PsychologyIcon from "@mui/icons-material/Psychology";
import useStyles from "./styles";

const ChallengeBox = ({ details }) => {
  const classes = useClasses(useStyles);

  const getCategoryColorClass = () => {
    if (details.category === "newbie") {
      return classes.newbieBox;
    } else if (details.category === "junior") {
      return classes.juniorBox;
    } else if (details.category === "intermediate") {
      return classes.intermediateBox;
    } else if (details.category === "advanced") {
      return classes.advancedBox;
    } else {
      return classes.guruBox;
    }
  };

  return (
    <Grid item lg={6} sm={12} className={classes.challengeItem}>
      <Box className={classes.wrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={details.imgSrc}
          alt="card-image"
          className={classes.cardImage}
        />
        <Box className={classes.detailsBox}>
          <Box className={classes.headingWrapper}>
            <Box
              className={`${classes.indicator} ${getCategoryColorClass()}`}
            ></Box>
            <Typography
              variant="h3"
              component="h3"
              className={classes.cardHeading}
            >
              {details.name}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.cardDate}
          >
            {details.submitted}
          </Typography>
          <Box className={classes.actionItems}>
            <Tooltip title="Live" arrow>
              <a href={details.liveUrl} target="_blank" rel="noreferrer">
                <LaunchIcon className={classes.actionIcon} alt="Live" />
              </a>
            </Tooltip>
            <Tooltip title="Code" arrow>
              <a href={details.gitHubCode} target="_blank" rel="noreferrer">
                <GitHubIcon className={classes.actionIcon} alt="View Code" />
              </a>
            </Tooltip>
            <Tooltip title="Try" arrow>
              <a href={details.challengeLink} target="_blank" rel="noreferrer">
                <PsychologyIcon
                  className={classes.actionIcon}
                  alt="Try Yourself"
                />
              </a>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ChallengeBox;
