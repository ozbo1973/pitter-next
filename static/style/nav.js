import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  homeImg: {
    width: "60px",
    height: "60px"
  },
  title: {
    flexGrow: 1,
    marginTop: "1rem"
  },
  mainTitle: {
    color: theme.palette.headerPrimary.main,
    textShadow: "1px 1px 2px white"
  },
  subTitle: {
    paddingLeft: theme.spacing(5)
  },
  sectionDesk: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));
