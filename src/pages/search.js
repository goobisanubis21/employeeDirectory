import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "../components/search";
import Container from "../components/Container";
import Table from "../components/Table"

class Search extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: []
    };

    componentDidMount() {
        API.getUser()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        // filter the employees to find names that include what is typed in search

        // this.setState({filteredEmployees: employees.filter(employees.name.first.includes(search.value))})

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
                    />
                    {this.state.employees.length ? <Table results={this.state.employees}/> : <Table results={this.state.filteredEmployees}/>}
                    {/* <Table results = {this.state.employees}/> */}
                    {/* <Table results={} /> */}
                     {/* table component that accepts a prop for the data. if filtered employees is empty pass employee array through */}
                </Container>
            </div>
        )
    };
};

export default Search;