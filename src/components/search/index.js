import React from "react";

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
                    onClick={props.handleFormSubmit}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar