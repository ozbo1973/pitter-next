import ActiveLink from "../components/activeLink";
import useStyles from "../../static/style/nav";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ActiveLink href="/">Home</ActiveLink>
          </IconButton>
          <Typography variant="h6">
            <ActiveLink href="/journalist">Journalist</ActiveLink>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
