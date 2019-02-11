import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    console.log("getting data");
    const url = "http://api.allthingsflexo.com/items";
    console.log("URL: " + url);
    fetch(url)
      .then(response => response.json())
      .then(data => console.log("data:" + data));

    // const result = await axios(
    //   "http://api.allthingsflexo.com/items?partno=${query}"
    // );
    // console.log("data got");
    // console.log(result);
    // setData(result);
  };

  useEffect(
    () => {
      fetchData();
    },
    [query]
  );

  return (
    <div className="App">
      <h1>Image Search</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="button" onClick={() => setSearch(query)}>
          Search
        </button>
      </div>
      <ul>
        {data.map(i => (
          <li key={i.id}>
            <a href={i.imageUrl}>{i.description}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
