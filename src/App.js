import "./App.css";
import Login from "./components/Login/Login.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import FilmList from "./components/FilmList/FilmList";

function App() {
  FilmList();
  return (
    <div className="App">
      <Router>
        {/* <Login /> */}
        <FilmList />
      </Router>
    </div>
  );
}

export default App;
