import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
    height: "100vh"
  },
  container: {
    marginTop: "5rem",
    padding: "1rem",
    height: "90vh"
  },
  img_container: {
    margin: "auto",
    width: "75%",
    height: "75%",
    borderRadius: "100%",
    border: `3px solid ${theme.palette.secondary.main}`,
    overflow: "hidden"
  },
  img: {
    margin: "auto",
    width: "100%",
    height: "100%"
  },
  paper: {
    padding: "1rem"
  },
  subPaper: {
    height: "340px",
    width: "140px"
  }
}));
