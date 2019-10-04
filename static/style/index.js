import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  hero: {
    height: "100vh",
    background: 'top / 100% no-repeat url("/static/img/last-pat.jpg")'
  },
  titleContainer: {
    width: "95%",
    textAlign: "center",
    marginTop: ".5rem",
    boxShadow: `8px 5px 5px ${theme.palette.primary.main}`,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "rgba(239,242,249,0.3)",
      borderRadius: "5px",
      padding: "1rem"
    }
  },
  mainTitle: {},
  subTitle: {
    textShadow: "1px 1px 2px yellow",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  menuContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      padding: "6rem 10rem"
    }
  }
}));
