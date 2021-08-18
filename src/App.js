import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Favorite from "./pages/Favorite/Favorite";
import Register from "./pages/Register/Register";
import { getLocalStorage } from "./helpers/localStorage";
import { storage } from "./constants/storage";
import "./App.css";

export default function App() {
  const isAuth = getLocalStorage(storage.isAuth);

  return (
    <Router>
      <Switch>
        <Route path="/home" children={<Home isAuth={isAuth} />} />
        <Route path="/home/favorites" children={<Favorite isAuth={isAuth} />} />
        <Route exact path="/" children={<Login isAuth={isAuth} />} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
