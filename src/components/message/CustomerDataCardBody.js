import React, {Component} from 'react';


export default class CustomerDataCardBody extends Component {
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
                                       className="form-control"
                                       required="required"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Surname</label>
                                <input type="text"
                                       className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Street /house number</label>
                                <input
                                    type="text" className="form-control" required="required"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>PLZ</label>
                                <input type="text"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text"
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


