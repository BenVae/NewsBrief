import React, {Component} from 'react';
import {Button, Col, Container, Form, Jumbotron, Row} from "react-bootstrap";


class Message extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex">
                            <div className="card child flex-grow-1 d-flex flex-column">
                                <div className="card-body border-bottom">
                                    <h5 className="card-title"><b>Search</b><br/></h5>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   placeholder="Enter CID or Name"/>
                                            <small className="form-text text-muted">Search for CustomerID or Name<br/>
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
                                                <td>2131236,&nbsp; Jgurtz</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body border-bottom">
                                    <h5 className="card-title"><b>Customerdata</b></h5>
                                    <form>
                                        <div className="row align-items-end">
                                            <div className="col-md-4">
                                                <div className="form-group"><label>CustomerID</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           required="required"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group"><label>Name</label> <input type="text"
                                                                                                       className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group"><label>Surname</label> <input type="text"
                                                                                                          className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-end">
                                            <div className="col-md-4">
                                                <div className="form-group"><label>Street /house number</label> <input
                                                    type="text" className="form-control" required="required"/></div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group"><label>PLZ</label> <input type="text"
                                                                                                      className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group"><label>City</label> <input type="text"
                                                                                                       className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-end">
                                            <div className="col-md-12 text-right">
                                                <a className="btn btn-primary"
                                                                                     href="#">Update</a>
                                                <a className="btn ml-2 btn-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><b>Send Message</b></h5>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control"
                                                              id="exampleFormControlTextarea1"
                                                              rows="3"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-right">
                                                <button type="submit" className="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Message;