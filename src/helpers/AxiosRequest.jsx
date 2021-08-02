import axios from "axios";
import { useState, useEffect } from "react";

export default function AxiosRequest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setData(res));
  }, [data]);
}
