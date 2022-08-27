const useStyles = (theme) => ({
  pageWrapper: {
    backgroundColor: "#0b0b0b",
    minHeight: "100vh",
    padding: theme.spacing(3, 6),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1, 3),
    },
  },
  mainHeading: {
    fontWeight: 700,
    fontFamily: "Poppins, sans-serif",
    color: "#e50914",
    fontSize: "45px",
    textAlign: "center",
  },
  description: {
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    fontSize: "20px",
    textAlign: "center",
  },
  loader: {
    color: "#FFFFFF",
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  challengesWrapper: {
    marginTop: theme.spacing(4),
  },
  socialIconsWrapper: {
    display: "flex",
    justifyContent: "center",
    borderTop: "2px solid #FFFFFF10",
    backgroundColor: "#0b0b0b",
    padding: theme.spacing(2),
  },
  socialIconContainer: {
    marginLeft: theme.spacing(2),
    backgroundColor: "transparent",
    border: "1px solid #FFF",
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      border: "1px solid #e50914",
    },
    [theme.breakpoints.down("md")]: {
      width: "25px",
      height: "25px",
      marginLeft: theme.spacing(1.5),
    },
  },
  socialIcon: {
    color: "#FFFFFF",
    transition: "0.5s all ease",
    "&:hover": {
      color: "#e50914",
    },
    [theme.breakpoints.down("md")]: {
      width: "16px",
      height: "16px",
    },
  },
});

export default useStyles;
