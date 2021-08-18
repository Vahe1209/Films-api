import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import MovieCard from "../../components/MovieCard/MovieCard";
import { storage } from "../../constants/storage";
import { getLocalStorage } from "../../helpers/localStorage";
import { Routes } from "../../constants/routes";
import "./Favorite.css";

export default function Favorite({ isAuth, setFavCount }) {
  const movies = getLocalStorage(storage.favorites)
    ? getLocalStorage(storage.favorites)
    : [];

  return isAuth ? (
    <section className="container">
      {!movies.length ? (
        <div className="favoriteBackground">
          <h1>You have not any favorite(s)</h1>
        </div>
      ) : (
        movies.map((movie) => {
          return (
            <MovieCard
              setFavCount={setFavCount}
              key={movie.id}
              date={movie.date}
              description={movie.description}
              title={movie.title}
              imgPath={movie.imgPath}
              genres={movie.genres}
              id={movie.id}
            />
          );
        })
      )}
    </section>
  ) : (
    <Redirect to={Routes.login.url} />
  );
}

Favorite.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
