import React, {Component} from 'react';


export default class SendMessageCardBody extends Component {
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title"><b>Send Message</b></h5>
                <form>
                    <div className="alert alert-primary" role="alert">
                        <button type="button" className="close" data-dismiss="alert">×</button>
                        <p className="mb-0">Your message has been sent successfully</p>
                    </div>
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
        )
    }
}


