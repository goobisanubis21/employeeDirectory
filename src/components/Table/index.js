import React from "react";

function Table(props) {
    return (
        <table className="tableResults">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
            <tr>
                <td>{props.employees}</td>
                <td>parrino</td>
                <td>email@email.com</td>
                <td>1234567890</td>
            </tr>
        </table>
    )
}

export default Table