import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import findGenreName from "../../helpers/findGenres";
import MovieCard from "../MovieCard/MovieCard";
import { getGenres } from "../../services/services";
import Loader from "../Loader/Loader";
import "./Movies.css";

export default function Movies({ loading, movies, setOffset, setFavCount }) {
  const [genres, setGenres] = useState("");

  const lazyLoad = function () {
    if (
      Math.ceil(window.scrollY) + 50 >=
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    ) {
      setOffset((prevOffset) => prevOffset + 1);
      window.scrollBy(-20, -20);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", lazyLoad);

    return () => window.removeEventListener("scroll", lazyLoad);
  });

  useEffect(() => {
    getGenres().then(({ genres }) => {
      setGenres(genres);
    });
  }, []);

  return (
    <section className="container">
      {loading ? (
        <Loader />
      ) : !movies.length ? (
        <div className="searchBackground">
          <h1>No Such Film</h1>
        </div>
      ) : (
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.overview}
              date={movie.release_date}
              imgPath={movie.backdrop_path}
              genres={genres ? findGenreName(genres, movie.genre_ids) : []}
              favorites={[]}
              setFavCount={setFavCount}
            />
          );
        })
      )}
    </section>
  );
}
Movies.propTypes = {
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  setOffset: PropTypes.func.isRequired,
};
