import React from "react";

function Table(props) {
    return (
        <table className="tableResults">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(results => (
                    <tr key={results.login.uuid}>
                        <td>{results.name.first}</td>
                        <td>{results.name.last}</td>
                        <td>{results.email}</td>
                        <td>{results.cell}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table