import React, {Component} from 'react';

export default class SearchCustomerCard extends Component {
    render() {


        return (
            <div className="card child flex-grow-1 d-flex flex-column">
                <div className="card-body border-bottom">
                    <h5 className="card-title">Search</h5>
                    <form>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"/>
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

                            <tr>
                                <td>4234234, Dieter</td>
                            </tr>
                            <tr>
                                <td>2342345, Peter</td>
                            </tr>
                            <tr>
                                <td>2131236, Jgurtz</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


}


