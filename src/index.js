import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

function App() {
  const [data, setData] = useState({ data: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    console.log("getting data");
    const url = `http://api.allthingsflexo.com/items?partno=${query}`;
    console.log("URL: " + url);
    const result = await axios(url);
    setData(result);
  };

  useEffect(
    () => {
      fetchData();
    },
    [search]
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
        {data.data.map(i => (
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
