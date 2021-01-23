import React from "react";

function SearchResults(props) {
  return (
    <ul className="search-results">
      {props.results.map(results => (
        <li key={results} className="result">
            {results.name.first}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;