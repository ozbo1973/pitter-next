import { useRouter } from "next/router";
// import useStyles from "../../static/style/activeLink";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme.spacing(5),
    color: theme.palette.linkPrimary.main,
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer"
    }
  },
  rootActive: {
    color: theme.palette.linkPrimary.active
  }
}));

const activeLink = ({ children, href }) => {
  const router = useRouter();
  const classes = useStyles();
  const { pathname } = router;

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  const style =
    pathname === href ? `${classes.root} ${classes.rootActive}` : classes.root;

  return (
    <span onClick={handleClick} className={style}>
      {children}
    </span>
  );
};

export default activeLink;
