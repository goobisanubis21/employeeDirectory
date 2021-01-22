import React from "react";

function SearchBar(props) {
    return (
        <div className="searchDiv">
            <form className="search">
                <input
                    value={props.search}
                    name="employees"
                    type="text"
                    className="searchBar"
                    placeholder="Search for Employee"
                    id="search"
                />
                <button
                    type="submit"
                    className="searchBtn">
                    Search
            </button>
            </form>
        </div>
    );
};

export default SearchBar