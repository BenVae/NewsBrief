import React, {Component} from 'react';


export default class CustomerDataCardBody extends Component {

    constructor(props) {
        super(props);
    }

    customerProps = () =>{

    }

    render() {
        return (
            <div className="card-body border-bottom">
                <h5 className="card-title">
                    <b>Customerdata</b>
                </h5>
                <form>
                    <div className="row align-items-end">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>CustomerID</label>
                                <input type="text"
                                       placeholder={this.props.customer.customerId}
                                       onClick={this.customerProps}
                                       className="form-control"
                                       required="required"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text"
                                       defaultValue={this.props.customer.name}
                                       onClick={this.customerProps}
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Surname</label>
                                <input type="text"
                                       defaultValue={this.props.customer.surname}
                                       onClick={this.customerProps}
                                       className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Street /house number</label>
                                <input
                                    type="text"
                                    defaultValue={this.props.customer.street}
                                    onClick={this.customerProps}
                                    className="form-control"
                                    required="required"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>PLZ</label>
                                <input type="text"
                                       defaultValue={this.props.customer.postcode}
                                       onClick={this.customerProps}
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text"
                                       defaultValue={this.props.customer.city}
                                       onClick={this.customerProps}
                                       className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-md-12 text-right">
                            <a className="btn btn-primary"
                               href="#">Update</a>
                            <a className="btn ml-2 btn-danger"
                               href="#">Delete</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


