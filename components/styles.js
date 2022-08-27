const useStyles = (theme) => ({
  challengeItem: {
    borderRadius: theme.spacing(1),
  },
  wrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#FFFFFF",
    display: "flex",
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  cardImage: {
    width: "50%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  detailsBox: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: theme.spacing(3),
    },
  },
  headingWrapper: {
    display: "flex",
    alignItems: "center",
  },
  indicator: {
    borderRadius: "100%",
    width: "11px",
    height: "11px",
    marginRight: theme.spacing(1),
  },
  cardHeading: {
    fontWeight: 700,
    fontFamily: "Poppins, sans-serif",
    fontSize: "18px",
    textAlign: "center",
  },
  cardDate: {
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    fontSize: "13px",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: theme.spacing(2),
  },
  categoryBox: {
    textAlign: "center",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5),
    margin: theme.spacing(2, 0),
  },
  newbieBox: {
    backgroundColor: "rgb(106, 190, 205)",
  },
  juniorBox: {
    backgroundColor: "rgb(170, 215, 66)",
  },
  intermediateBox: {
    backgroundColor: "rgb(241, 182, 4)",
  },
  advancedBox: {
    backgroundColor: "rgb(244, 137, 37)",
  },
  guruBox: {
    backgroundColor: "rgb(237, 44, 73)",
  },
  categoryText: {
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    fontSize: "13px",
    textAlign: "center",
  },
  actionItems: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  actionIcon: {
    fontSize: "30px",
    color: "rgb(237, 44, 73)",
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.3)",
      textDecoration: "underline",
    },
  },
});

export default useStyles;
