import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getMoviesByPage, getMovieByQuery } from "../../services/services";
import Header from "../../components/Header/Header";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Movies from "../../components/MoviesList/MoviesList";
import Favorite from "../Favorite/Favorite";
import { Routes } from "../../constants/routes";
import { getLocalStorage } from "../../helpers/localStorage";
import { storage } from "../../constants/storage";

const initialFavCount = getLocalStorage(storage.favorites)
  ? getLocalStorage(storage.favorites).length
  : 0;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(1);
  const [favCount, setFavCount] = useState(initialFavCount);

  const isAuth = getLocalStorage(storage.isAuth);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    getMoviesByPage(offset).then((res) => {
      setMovies([...movies, ...res.results]);
      setLoading(false);
    });
  }, [offset]);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      getMovieByQuery(searchQuery)
        .then((res) => {
          setMovies(res.results);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
        });
    } else {
      getMoviesByPage(1).then((res) => {
        setMovies(res.results);
        setLoading(false);
      });
    }
  }, [searchQuery]);

  return isAuth ? (
    <>
      <Header handleSearchInput={handleSearchInput} favCount={favCount} />
      <Switch>
        <Route exact path={Routes.home.url}>
          <Movies
            setOffset={setOffset}
            isAuth={isAuth}
            loading={loading}
            movies={movies}
            setFavCount={setFavCount}
          />
        </Route>

        <Route path="/home/favorites">
          <Favorite setFavCount={setFavCount} isAuth={isAuth} />
        </Route>

        <Route path="/home/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </>
  ) : (
    <Redirect to="/" />
  );
}
