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
        const { search, employees } = this.state;
        if (search === "") {
            return
        } else {
            const filteredEmployees = employees.filter(employees => employees.name.first.toLowerCase().includes(search.toLocaleLowerCase()));
            this.setState({ filteredEmployees });
        }
    };

    handleFormSubmit = event => {
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
                    {!this.state.search.length ? <Table results={this.state.employees}/> : <Table results={this.state.filteredEmployees}/>}
                </Container>
            </div>
        )
    };
};

export default Search;