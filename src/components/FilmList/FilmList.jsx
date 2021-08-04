import { useEffect, useState } from "react";
import { Card } from "antd";
import { getAllMovies, getImgUrl } from "../../service/axiosRequest";
import "./FilmList.css";

export default function FilmList() {
  const { Meta } = Card;
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    getAllMovies().then((res) => {
      const { results } = res;
      setFilmList(results);
    });
  }, []);

  return (
    <div className="film-list">
      {filmList.map((film) => {
        return (
          <Card
            hoverable
            style={{
              width: "22%",
              height: "400px",
              margin: "20px",
              fontSize: "25px",
              textAlign: "center",
            }}
            cover={
              <img
                width="90%"
                height="300px"
                alt={film.original_title}
                src={getImgUrl(film.backdrop_path)}
              />
            }
          >
            <Meta style={{ color: "white" }} title={film.original_title} />
          </Card>
        );
      })}
    </div>
  );
}
