import React from "react";

// creates search bar
function SearchBar(props) {
    return (
        <div className="searchDiv">
            <form className="search">
                <input
                    value={props.search}
                    name="employees"
                    onChange={props.handleInputChange}
                    type="text"
                    className="searchBar"
                    placeholder="Search for Employee"
                    id="search"
                />
                <button
                    type="submit"
                    className="searchBtn"
                    onClick={props.handleSort}
                    >
                    Alphabetize
                </button>
            </form>
        </div>
    );
};

export default SearchBar