import React, { Component } from "react";
import SearchBar from "../components/search";
import Container from "../components/Container";

class Search extends Component {
    state = {
        search: "",
        employees: [],
        error: []
    };

    render() {
        return (
            <div>
                <Container>
                    <SearchBar />
                </Container>
            </div>
        )
    };
};

export default Search;