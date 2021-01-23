import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "../components/search";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import Table from "../components/Table"

class Search extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: []
    };

    componentDidMount() {
        API.getUser()
            .then(res => this.setState({ employees: res.data }))
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        // filter the employees to find names that include what is typed in search
        // setState of filtered employees to new array
        event.preventDefault();
        API.getUser(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <Container>
                    <SearchBar
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        employees={this.state.employees}
                    />
                    {this.state.employees.length ? <SearchResults results={this.state.employees}/> : null}
                    <Table results = {this.state.employees}/>
                    {/* <Table results={} /> */}
                     {/* table component that accepts a prop for the data. if filtered employees is empty pass employee array through */}
                </Container>
            </div>
        )
    };
};

export default Search;