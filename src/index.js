import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const result = await axios(
      "http://api.allthingsflexo.com/items?partno=${query}"
    );
    setData(result);
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
