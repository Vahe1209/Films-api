import React from "react";
import { Link } from "react-router-dom";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { removeFromLocalStorage } from "../../helpers/localStorage";
import { storage } from "../../constants/storage";
import { Routes } from "../../constants/routes";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  titleLogOut: {
    display: "none",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      width: "145px",
    },
  },
  titleMenu: {
    display: "block",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  titleFavorite: {
    display: "block",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  homeIcon: {
    fontSize: "50px",
  },
}));

export default function Navbar({ handleSearchInput, favCount }) {
  const classes = useStyles();

  function deleteIsAuth() {
    removeFromLocalStorage(storage.isAuth);
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link to={Routes.home.url}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <GroupWorkIcon color="secondary" className={classes.homeIcon} />
            </IconButton>
          </Link>
          <Link className={classes.title} to={Routes.home.url}>
            <Typography variant="overline" noWrap>
              Cinema-News
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color="primary" />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearchInput}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link className={classes.title} to={Routes.favorite.url}>
              <IconButton color="inherit">
                <Badge color="secondary" badgeContent={favCount} max={10}>
                  <FavoriteIcon color="secondary" />
                </Badge>
                <Typography variant="overline">Favorites</Typography>
              </IconButton>
            </Link>
            <Link className={classes.titleLogOut} to={Routes.login.url}>
              <IconButton onClick={deleteIsAuth} color="inherit">
                <Badge>
                  <ExitToAppIcon color="secondary" />
                </Badge>
                <Typography variant="overline">Log Out</Typography>
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <Link className={classes.titleFavorite} to={Routes.favorite.url}>
              <IconButton color="inherit">
                <Badge color="secondary" badgeContent={favCount} max={10}>
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link className={classes.titleMenu} to={Routes.login.url}>
              <IconButton onClick={deleteIsAuth} color="inherit">
                <Badge>
                  <ExitToAppIcon />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
};
