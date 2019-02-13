import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.scss";
import ResultsList from "./components/ResultsList";

function App() {
    const [data, setData] = useState({data:[]});
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");

    const fetchData = async () => {
    console.log("getting data");
    const url = encodeURI(`http://api.allthingsflexo.com/items?partno=${query}`);
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
    <ResultsList />
    <ul>
        {data.data.map(i => (
        <li key={i.id}>
            <a href={i.imageUrl}><image src={i.thumbnailUrl}></image><span>{i.description}</span></a>
        </li>
        ))}
    </ul>
    </div>
    );
}

export default App;