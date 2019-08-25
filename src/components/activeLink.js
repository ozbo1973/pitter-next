import { useRouter } from "next/router";
// import useStyles from "../../static/style/activeLink";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    marginRight: "10px",
    color: theme.palette.linkPrimary.main
  },
  rootActive: {
    marginRight: "10px",
    color: theme.palette.linkPrimary.hover
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

  const style = pathname === href ? classes.rootActive : classes.root;

  return (
    <a href={href} onClick={handleClick} className={style}>
      {children}
    </a>
  );
};

export default activeLink;
