import MovieDetails from "../components/Movies/MovieDetails";
import Movies from "../components/Movies/Movies";
import Favorite from "../pages/Favorite/Favorite";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const Routes = {
  login: {
    url: "/",
    component: Login,
  },
  register: {
    url: "/register",
    component: Register,
  },
  home: {
    url: "/home/",
    component: Home,
  },
  movies: {
    url: "/home/movies",
    component: Movies,
  },
  favorite: {
    url: "/home/favorites",
    component: Favorite,
  },
  movieDetails: {
    url: "/home/movies/",
    component: MovieDetails,
  },
};
