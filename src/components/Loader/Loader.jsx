import CircularProgress from "@material-ui/core/CircularProgress";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
}
