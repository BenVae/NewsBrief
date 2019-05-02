import React, {Component} from 'react';
import SweetAlert from 'sweetalert2-react';

export default class SendMessageCardBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSendMessage: false
        };
    }

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
                                <button onClick={() => this.setState({showSendMessage: true})}
                                        className="btn btn-primary">Send
                                </button>
                                <SweetAlert
                                    show={this.state.showSendMessage}
                                    title="Demo"
                                    text="SweetAlert in React"
                                    onConfirm={() => this.setState({showSendMessage: false})}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


