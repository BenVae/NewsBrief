import React, {Component} from 'react';
import {fetchCustomerdata} from "../../helper/FetchData";


export default class SearchCustomerCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card child flex-grow-1 d-flex flex-column">
                <div className="card-body border-bottom">
                    <h5 className="card-title">
                        <b>Search</b>
                    </h5>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   placeholder="Enter CID or Name"/>
                            <small className="form-text text-muted">
                                Search for CustomerID or Name
                            </small>
                        </div>
                    </form>
                    <div className="table-responsive m-0">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Customers</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.customers.map((customer, index) => (
                                    <tr key={index}>
                                        <td id={customer.customerId}
                                            className="list-group-item list-group-item-action td-list-item clickable-anchor-tags">
                                            {customer.customerId}, {customer.surname} {customer.name}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


}


