import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { getImgUrl } from "../../services/services";
import { Link } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../helpers/localStorage";
import { storage } from "../../constants/storage";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PropTypes from "prop-types";
import { Routes } from "../../constants/routes";
import "./MovieCard.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "47vh",
    margin: "20px",
    border: "1px solid dimgrey",
    borderRadius: "20px",
  },

  titleName: {
    color: "blue",
  },

  favBtn: {
    padding: 0,
  },

  movieTitle: {
    textAlign: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

let favorites = [];

export default function MovieCard({
  title,
  date,
  description,
  imgPath,
  genres,
  id,
  setFavCount,
}) {
  favorites = getLocalStorage(storage.favorites)
    ? getLocalStorage(storage.favorites)
    : [];

  let isFav = favorites.some((movie) => movie.id === id);

  const [isFavorite, setIsFavorite] = useState(isFav);

  const classes = useStyles();

  const handleFavIconToggle = () => {
    setIsFavorite(!isFavorite);
    const movieInfo = {
      title,
      date,
      description,
      imgPath,
      genres,
      id,
      isFavorite: !isFavorite,
    };

    if (isFavorite) {
      setLocalStorage(
        storage.favorites,
        favorites.filter((movie) => movie.id !== id)
      );
      setFavCount((prevFavCount) => prevFavCount - 1);
    } else {
      favorites.push(movieInfo);
      setLocalStorage(storage.favorites, favorites);
      setFavCount((prevFavCount) => prevFavCount + 1);
    }
  };

  return (
    <Card className={classes.root}>
      <Link to={`${Routes.home.url}${id}`}>
        <CardHeader
          title={title}
          subheader={date}
          className={classes.titleName}
        />
      </Link>
      <Link to={`${Routes.home.url}${id}`}>
        <CardMedia
          className={classes.media}
          image={getImgUrl(imgPath)}
          title={title}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="section">
          <section>{description.slice(0, 70)}...</section>
        </Typography>
        <ul>
          {genres.map((genre) => {
            return <li className="genreName">{genre}</li>;
          })}
        </ul>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={classes.favBtn}
          size="small"
          color="primary"
          onClick={handleFavIconToggle}
          aria-label="add to favorites"
        >
          {isFavorite ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};
