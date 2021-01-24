import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "../components/search";
import Container from "../components/Container";
import Table from "../components/Table"

// class component setting state
class Search extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: []
    };

    // function to get data from apr
    componentDidMount() {
        API.getUser()
            .then(res => this.setState({
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }

    // function to filter employee list based upon whats typed in serach bar
    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });
        const { search, employees } = this.state;
        if (search === " ") {
            return
        } else {
            const filteredEmployees = employees.filter(employees => employees.name.first.toLowerCase().includes(search.toLocaleLowerCase()));
            this.setState({ filteredEmployees });
        }
    };

    // function to allow user to click on a button and alphabetize employee list by first name
    handleSort = event => {
        event.preventDefault()
        const { employees } = this.state
        employees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        this.setState({ employees })
    }

    // returning html with functions and data passed in
    render() {
        return (
            <div>
                <Container >
                    <SearchBar
                        handleSort={this.handleSort}
                        handleInputChange={this.handleInputChange}
                    />
                    {!this.state.search.length ? <Table results={this.state.employees} /> : <Table results={this.state.filteredEmployees} />}
                </Container>
            </div>
        )
    };
};

export default Search;