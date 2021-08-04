import "./App.css";
import Login from "./components/Login/Login.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Login /> */}
        <Main />
      </Router>
    </div>
  );
}

export default App;
