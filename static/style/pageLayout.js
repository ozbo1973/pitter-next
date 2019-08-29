import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
    height: "100vh"
  },
  container: {
    marginTop: "1rem",
    padding: "1rem",
    height: "90vh",
    [theme.breakpoints.up("md")]: {
      marginTop: "5rem"
    }
  },
  img_container: {
    margin: "auto",
    width: "50%",
    height: "50%",
    borderRadius: "100%",
    border: `3px solid ${theme.palette.secondary.main}`,
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      width: "75%",
      height: "75%"
    }
  },
  img: {
    margin: "auto",
    width: "100%",
    height: "100%"
  },
  title: {
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      margin: "0px"
    }
  },
  subTitle: {
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      margin: "0px"
    }
  },
  paper: {
    padding: "1rem"
  }
}));
