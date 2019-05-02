import React, {Component} from 'react';

export default class SendMessageCardBody extends Component {
    render() {
        return (
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
                            <div>
                                <button className="btn btn-primary">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


