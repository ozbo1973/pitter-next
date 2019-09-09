import { useContext } from "react";
import { useRouter } from "next/router";
import { PageDataContext } from "../contexts/pageData.context";
import {
  MenuItem,
  Paper,
  Typography,
  Avatar,
  MenuList
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "30%",
    backgroundColor: "rgba(244, 246, 249,0.5)",
    boxShadow: `8px 5px 5px ${theme.palette.primary.main}`
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  menuItemText: {
    marginLeft: "1rem",
    textShadow: `1px 1px 2px ${theme.palette.secondary.main}`
  }
}));

const DisplayMenuItems = ({ menuItems }) => {
  const router = useRouter();
  const menuKeys = Object.keys(menuItems);
  const classes = useStyles();

  return menuKeys.map(m => (
    <MenuItem
      key={m}
      onClick={() => router.push(`/${m}`)}
      className={classes.menuItem}
    >
      <Avatar
        alt={menuItems[m].subTitle}
        src={menuItems[m].imgSrc}
        className={classes.avatar}
      />
      <Typography variant="h5" color="primary" className={classes.menuItemText}>
        {menuItems[m].title}
      </Typography>
    </MenuItem>
  ));
};

const HomeMenu = () => {
  const classes = useStyles();
  const { data } = useContext(PageDataContext);
  return (
    <Paper className={classes.root}>
      <MenuList>
        <DisplayMenuItems menuItems={data} />
      </MenuList>
    </Paper>
  );
};

export default HomeMenu;
