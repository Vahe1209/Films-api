import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getImgUrl, getMovieById } from "../../services/services";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import StarsIcon from "@material-ui/icons/Stars";
import Loader from "../Loader/Loader";
import "./MovieDetails.css";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    getMovieById(id).then((response) => {
      setMovieDetails(response);
      setLoading(false);
    });
  }, [id]);

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <div className="wrapper">
          <img
            className="imgBackground"
            src={getImgUrl(movieDetails.backdrop_path)}
            alt={movieDetails.title}
          />
          <div>
            <img
              className="backgroundPath"
              src={getImgUrl(movieDetails.poster_path)}
              alt={movieDetails.title}
            />
          </div>
          <div className="status">{movieDetails.status}</div>
          <div className="date">{movieDetails.release_date}</div>
          <div className="borderStyle"></div>
          <div className="title">{movieDetails.title}</div>
          <div className="overview">
            {movieDetails.overview}
            <MovieFilterIcon className="iconFilm" />
          </div>
          <div className="borderStyleOverview"></div>
          <div className="rating">
            <StarsIcon className="icon" />
            {movieDetails.vote_average}
          </div>
          <div className="runtime">{movieDetails.runtime} mins</div>
          <div className="tagline">{movieDetails.tagline}</div>
          <div className="borderBottom"></div>

          <div className="border"></div>
        </div>
      )}
    </section>
  );
}
